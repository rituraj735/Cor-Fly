//jshint esversion:6
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const middlewares = [bodyParser.urlencoded({extended:true}),];
const app = express();
const port = 3000;
var db= require('./connection.js');
var user = require('./user.js');
var session = require('express-session');
app.use(session({secret:'add cat', resave:false, saveUninitialized: true, cookie:{maxAge: 60000}}));
app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  res.render('home_page');
});

app.post('/', (req,res, next )=> {

  var flight_from = req.body.flight_source;
  var flight_to = req.body.flight_dest;
  console.log(flight_from + flight_to);
  var sql= `INSERT INTO FLIGHT values('SP113', 35, '12:40:35', 2, '${flight_from}', '${flight_to}', 13, '14:00:00',1)`;
  db.query(sql, (err,data)=> {
  if(err)
       throw err;
   console.log("record inserted");
    });
   res.redirect('/');
  next();
});

app.post('/login', user.login);

app.post('/register_flight', (req,res, next)=> {
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
  res.render('flight_reg');
    next();
  }) ;
});

app.listen(port, ()=> {
  console.log(`Example app listening at ${port}`);
});
// var mysql = require('mysql');
//
// var con = mysql.createConnection({
//   host: "bc4wleyqxkeakwel6nqm-mysql.services.clever-cloud.com",
//   user: "ukwedoierr9smgmi",
//   password: "44m52UgbR3YqlIiEa4Wr",
//   database:"bc4wleyqxkeakwel6nqm"
// });
// function makeid(length) {
//    var result           = '';
//    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    var charactersLength = characters.length;
//    for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//    }
//    return result;
// }
// /*
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "180045",
//   database:"project_air_ticket"
// });
// */
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO FLIGHT VALUES ('SP109',30,'12:30:15',1,'Bengaluru','Mumbai',15,'14:00:00')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   var i;
//
//   for(i=1;i<30;i++){
//
// 	  var sql = "INSERT INTO SEAT VALUES("+i+",'SP109',0)";
// 	  con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   }
//   var temp=makeid(5);
//   var temp1=''
//   for(i=0;i<temp.length;i++){
// 	  temp1+=temp.charAt(i);
//   }
//
//   var sql = "INSERT INTO TICKET(PNR,Flight_number,Seat_Number,date1) VALUES('"+temp1+"'"+",'SP109',1,'2020/11/13')";
// 	  con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("ticket record inserted");
//   });
//   var sql = "INSERT INTO PERSON VALUES('Sharath',21,'sharathhn.vasistha@gmail.com','9480543821',98,'Travelled no places',1,'"+temp1+"'"+")";
// 	  con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("person record inserted");
//   });
// });
