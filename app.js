const express = require('express');
const app = express();
const http = require('http');
const router = express.Router();
const server = http.createServer(app);
const bodyParser = require('body-parser')
const hostname = '117.16.197.11';
const port = 3000;

var p1 = require('./routes/p1.js')(app); //객체 app을 전달
app.use('/p1', p1);

server.listen(port, () => {
    console.log(`Server is running at ${port}`);
});

module.exports = app;
