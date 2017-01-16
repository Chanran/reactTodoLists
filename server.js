const proxy = require('proxy-middleware')
const url = require('url')
const express = require('express')
const app = express()

app.get('/',function(req,res){
  res.sendFile(__dirname+'/src/html/index.html');
})
app.listen(3001)
app.use('/build',proxy(url.parse('http://localhost:3000/build')))

