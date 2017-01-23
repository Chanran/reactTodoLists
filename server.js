const proxy = require('proxy-middleware')
const url = require('url')
const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(__dirname+'/src'))

app.get('/',function(req,res){
  res.sendFile(path.resolve(__dirname,'src/html','index.html'));
})
app.listen(3001)
app.use('/build',proxy(url.parse('http://localhost:3000/build')))

