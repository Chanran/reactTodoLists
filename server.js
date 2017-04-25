const proxy = require('proxy-middleware')
const url = require('url')
const path = require('path')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const crypto = require('crypto');
const app = express()

// express sesion
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*10 //过期时间设置(单位毫秒)
    }
}));
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
  let username = req.body.username
  let password = req.body.password

  // 盐加密
  const salt = "blue1234"
  const hasher = crypto.createHash("md5")
  hasher.update(password + salt,"UTF8")
  const encryptpassword = hasher.digest('hex');

  if (username === 'blue' && encryptpassword === 'b4511857890fbe27cc81074a7ff17c5b') {
    req.session.user = username;
    res.json({
      msg: '登录成功',
      code: '200',
      username
    })
  } else {
    res.json({
      msg: '用户名或者密码错误',
      code: '300'
    })
  }
})

// 登出
app.get('/logout', (req, res) => {
  req.session.user = null;
  res.json({
    msg: '登出成功',
    code: '200'
  })
})

app.listen(3001)
app.use('/build',proxy(url.parse('http://localhost:3000/build')))

