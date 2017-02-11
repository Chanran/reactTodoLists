const proxy = require('proxy-middleware')
const url = require('url')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')
const app = express()

app.use(favicon(__dirname+'/src/public/favicon.ico'))
app.use(express.static(__dirname+'/src/public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res) => {
  res.sendFile(path.resolve(__dirname,'src/html','index.html'));
})

app.post('/test',(req,res) => {
  let data = req.body
  console.log(data)
  res.json({status:'success',msg:'Well Done',data})
})
app.listen(3001)
app.use('/build',proxy(url.parse('http://localhost:3000/build')))

