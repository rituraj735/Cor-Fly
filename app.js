//jshint esversion:6
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
var db= require('./connection');
app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  res.render('home_page');
});
app.get('/bookingform', (req,res)=>{
  res.render('bookingform');
});

app.get('/admin', (req,res)=>{
  res.render('admin');
});

app.post('/', (req,res , next)=> {
   console.log(req.body);

   // var sql= `INSERT INTO FLIGHT values('SP113', 35, '12:40:35', 2, '${flying_from}', '${flying_to}', 13, '14:00:00')`;
   // db.query(sql, (err,data)=> {
   //   if(err)
   //      throw err;
   //   console.log("record inserted");
   // });
   // res.redirect('/');
   next();
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
