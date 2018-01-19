var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connection = mysql.createConnection({
    postId : '',
    letter : ''
});

module.exports = function(app){//함수로 만들어 객체 app을 전달받음
	router.get('/:postId/:letter', function(req, res){
    console.log(req.params.postId + " / " + req.params.letter)
		res.json("Hi 1")
	});

	router.get('/:postId', function(req, res){
		res.json("Hi 2")
	});
	return router;	//라우터를 리턴
};
