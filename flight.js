//jshint esversion : 6
exports.flight= function(req,res, next) {
  var db= require('./connection.js');
  var flight_from = req.body.source;
  var flight_to = req.body.dest;
  var flight_no = req.body.flight_no;
  var dept = req.body.dept;
  var arrival = req.body.arrival;
  var foodOpt = req.body.food;
  var seats = req.body.seats;
  var sql = `INSERT INTO FLIGHT VALUES('${flight_no}', ${seats}, '${dept}',${foodOpt},'${flight_to}','${flight_from}', 15, '${arrival}',NULL)`;
  db.query(sql , (err,data)=>{
    if(err)
       throw err;
    console.log("record inserted");
    var i;
    for(i=1;i<=30;i++){
    var sql = `INSERT INTO SEAT (Seat_Number,Flight_NUmber,Status1) VALUES(${i},'${flight_no}',0)`;
    	  db.query(sql, function (err, result) {
        if (err) throw err;
        console.log(i+" record inserted");

      });
      }
  
  res.render('flight_reg');
    next();
  }) ;
};
