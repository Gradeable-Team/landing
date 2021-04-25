// const fs = require('fs');
// const http = require('http');
// const https = require('https');
// const privateKey  = fs.readFileSync(__dirname+'\\sslcert\\server.key', 'utf8');
// const certificate = fs.readFileSync(__dirname+'\\sslcert\\server.cert', 'utf8');

// const credentials = {key: privateKey, cert: certificate};
// const express = require('express');
// const app = express();

// app.use(express.static(__dirname + '/public'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// })
// // your express configuration here

// var httpServer = http.createServer(app);
// var httpsServer = https.createServer(credentials, app);
// httpServer.listen(2442);
// httpsServer.listen(2443, function() {
//     console.log("Server Started!");
// });

var express = require('express')
var fs = require('fs')
var https = require('https')
var app = express()

app.get('/', function (req, res) {
  res.send('hello world')
})

https.createServer({
  key: fs.readFileSync(__dirname+'/sslcert/server.key'),
  cert: fs.readFileSync(__dirname+'/sslcert/server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})