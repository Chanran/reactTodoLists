const proxy = require('proxy-middleware')
const url = require('url')
const path = require('path')
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const app = express()

app.use(favicon(__dirname+'/src/public/favicon.ico'))
app.use(express.static(__dirname+'/src/public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

// 访问首页
app.get('/',(req,res) => {
  res.sendFile(path.resolve(__dirname,'src/html','index.html'));
})

// 登录接口
app.post('/login', (req, res) => {
  const username = req.body.username
  const password = req.body.password
  const remoteip = req.connection.remoteAddress

  // 盐加密
  const salt = "blue1234"
  const hasher = crypto.createHash("md5")
  hasher.update(password + salt,"UTF8")
  const encryptpassword = hasher.digest('hex');

  if (username === 'blue' && encryptpassword === 'b4511857890fbe27cc81074a7ff17c5b') {

    // jwt secret
    const jwtSecret = fs.readFileSync('./config/private.key')
    const token = jwt.sign(
      {
        username,
        remoteip
      },  // payload
      jwtSecret, // private secret
      {
        expiresIn: 60 * 60
      }
    )

    res.json({
      msg: '登录成功',
      code: '200',
      token
    })
  } else {
    res.json({
      msg: '用户名或者密码错误',
      code: '300'
    })
  }
})

app.get('/checktoken', (req, res) => {
  const token = req.query.token || 
                req.params.token || 
                req.body.token ||
                req.headers['x-access-token']
  // jwt secret
  const jwtSecret = fs.readFileSync('./config/private.key')

  jwt.verify(token, jwtSecret, function(err, decoded) {
    if (err) {
      return res.json({
        msg: '验证token失败',
        code : '403'
      })
    } else {
      return res.json({
        msg: '验证token成功',
        code: '200',
      })
    }
  })
})

// 登出
app.get('/logout', (req, res) => {
  res.json({
    msg: '登出成功',
    code: '200'
  })
})

app.listen(3001)
app.use('/build',proxy(url.parse('http://localhost:3000/build')))

