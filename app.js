// Module 추가
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

// 서버 컴퓨터의 IP 주소
const host = '192.168.0.23';
const port = 3000;

// Router 사용하여 Routing
var params = require('./routes/p1.js')(app); // 만약 routes 분리를 한 params.js에서 app 객체를 사용하고 싶다면
app.use('/p1',params);

// Server Setting
server.listen(port, host ,function(){
 console.log(`Connect ${port}`);
});

module.exports = app;
