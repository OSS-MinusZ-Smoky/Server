var mysql = require("mysql");

module.exports = function(app, pool) {
    // >> POST
    app.post("/", function(req, res) {
        var result = {};
        // 요청된 데이터 중 title이라는 놈을 뽑아 title이라고 명명.
//        var no = req.body.no;
	console.log(req.body);
    console.log(req.body.state);
	// console.log(name);
 	// var email = req.body.email;
	// var gender = req.body.gender;
	// var jobs = req.body.jobs;
	// var age = req.body.age;
    //     // title에 아무 값이 없다면 에러 발생시킴
    //     if (name == undefined ) {
    //         result = returnResult(new Error("name is empty."), res);
    //     } else {
    //         // db에 연결하여 sql 수행
            // pool.getConnection(function(err, conn) {
            //     // title 정보를 DB에 넣기 위한 SQL문 준비
            //     var sql =  "update 경기도 set state="+req.body.state.toString()+" where busid='17-368';";
            //     console.log(sql);
            //     conn.query(sql);
            //     conn.release();

            // });
    //     }
    //     result.status = res.statusCode;
    //     res.send(result);
    });
    
    
    // >> GET
    app.get("/", function(req, res) {
    var result = {};
    var result1 = {};
    var result2 = {};
    // db에 연결하여 sql 수행
    var doh="";
    var city=req.query.city||"SEOUL";
    doh=doh.toUpperCase();
    city=city.toUpperCase();
    pool.getConnection(function(err, conn) {
        var sql = "SELECT doh from city where city='"+city+"';";
        console.log(sql);
        conn.query(sql, function(err, rows) {
            var result = returnResult(err, res);
            console.log(rows)
            if (rows) {
                doh = rows[0].doh;
                if(doh!=" "){
                    console.log(doh);
                var sql = "SELECT * from "+doh+" where city='"+city+"';";
                console.log(sql);
                conn.query(sql, function(err, rows) {
                    var result = returnResult(err, res);
                    if (rows) {
                        result1 = rows;
                    }
                    //conn.release();
                    //result.status = res.statusCode;
                    //res.send(result);
                });
                var sql = "SELECT * from city where city='"+city+"';";
                console.log(sql);
                conn.query(sql, function(err, rows) {
                    var result = returnResult(err, res);
                    if (rows) {
                        result2 = rows;
                    }
                    result={result2,result1};
                
                    result.status = res.statusCode;
                    res.send(result);
                });
                }
                else{
                    var sql = "SELECT * from "+city+";";
                    console.log(sql);
                    conn.query(sql, function(err, rows) {
                        var result = returnResult(err, res);
                        if (rows) {
                            result1 = rows;
                        }
                        //conn.release();
                        //result.status = res.statusCode;
                        //res.send(result);
                    });
                    var sql = "SELECT * from city where city='"+city+"';";
                    console.log(sql);
                    conn.query(sql, function(err, rows) {
                        var result = returnResult(err, res);
                        if (rows) {
                            result2 = rows;
                        }
                        result={result2,result1};
                    
                        result.status = res.statusCode;
                        res.send(result);
                    });
                }
                conn.release();
                
            }
           
            //result.status = res.statusCode;
            //res.send(result);
        });
    });
    // pool.getConnection(function(err, conn) {
    //     var sql = "SELECT * from "+doh+" where city='"+city+"';";
    //     console.log(sql);
    //     conn.query(sql, function(err, rows) {
    //         var result = returnResult(err, res);
    //         if (rows) {
    //             result1 = rows;
    //         }
    //         //conn.release();
    //         //result.status = res.statusCode;
    //         //res.send(result);
    //     });
    //     var sql = "SELECT * from city where city='"+city+"';";
    //     console.log(sql);
    //     conn.query(sql, function(err, rows) {
    //         var result = returnResult(err, res);
    //         if (rows) {
    //             result2 = rows;
    //         }
    //         result={result2,result1};
    //         conn.release();
    //         result.status = res.statusCode;
    //         res.send(result);
    //     });
    // });
});

    // >> GET/card
    app.get("/data", function(req, res) {
        var result = {};
        // SQL injection attack 방지위해 mysql.escape();
        var doh=req.query.doh;
        var city=req.query.city||"SEOUL";
        var id=req.query.id;
        
        if(doh==" "){
            // db에 연결하여 sql 수행
        pool.getConnection(function(err, conn) {
        	var sql = "SELECT state from "+city+ " where busid='"+id+"';";
            console.log(sql);
            conn.query(sql, function(err, rows) {
                var result = returnResult(err, res);
                if (rows) {
                    result.message = rows;
                }
                conn.release();
                result.status = res.statusCode;
                res.send(result);
            });
        });
        }
        else{
            // db에 연결하여 sql 수행
        pool.getConnection(function(err, conn) {
        	var sql = "SELECT state from "+doh+ " where busid='"+id+"';";
            console.log(sql);
            conn.query(sql, function(err, rows) {
                var result = returnResult(err, res);
                if (rows) {
                    result.message = rows;
                }
                conn.release();
                result.status = res.statusCode;
                res.send(result);
            });
        });

        }
        
        
        
    });

}
 
var returnResult = function(err, res) {
    // 결과를 눈으로 보기 쉽게하기 위해 result 객체 생성
    var result = {};
    if (err) {
        res.status(400);
        result.message = err.stack;
    } else {
        res.status(200);
        result.message = "Success";
    }
    return result;
}
