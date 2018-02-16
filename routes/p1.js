module.exports = function(app){//함수로 만들어 객체 app을 전달받음
	var express = require('express');
	var mysql = require('mysql');
	var router = express.Router();

	// DB 연결
	var con = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '1108',
		database : 'braille'
	});
	con.connect();

	router.get('/:letter',function(req,res){

    // DB 작업 수행
    var sql = `SELECT * FROM letter WHERE name='${req.params.letter}'`;
    con.query(sql, function(err,rows,fields){
      if(err){
        console.log(err);
      }else{
				console.log("요청받은 Letter : " + req.params.letter);
        console.log(rows);
				console.log(typeof(rows))
				// TODO: JSON 형식으로 보내기 ㅠㅠ
				res.send(rows);
      }
    })
  });
  return router;
};
