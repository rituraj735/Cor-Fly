//jshint esversion:6
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const middlewares = [bodyParser.urlencoded({extended:true}),];
const app = express();
const port = process.env.PORT||3000;
var db= require('./connection.js');
var user = require('./user.js');
var flight = require('./flight.js');
var ticket_form= require('./ticket_form.js');
var session = require('express-session');
app.use(session({secret:'add cat', resave:false, saveUninitialized: true, cookie:{maxAge: 60000}}));
app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
  res.render('home_page');
});

app.post('/', ticket_form.ticket);

app.post('/login', user.login);

app.post('/register_flight', flight.flight);

app.post('/seats', (req, res)=> {
  console.log(req.body.seat);
  var seat = req.body.seat;
  var pnr= req.body.pnr;
  var flight = req.body.flight;
  var name = req.body.name;
  var phone = req.body.phone;
  var from = req.body.from;
  var to = req.body.to;
  var date= req.body.date;
  var health = req.body.health;
  var sql3 = `UPDATE SEAT SET Status1=1 WHERE Seat_Number='${seat}' AND Flight_NUmber='${flight}'`;
  db.query(sql3, (err,data)=> {
  if(err)
     throw err;
    console.log("record inserted");
     });
     var sql4 = `UPDATE TICKET SET Seat_Number=${seat} WHERE PNR='${pnr}'`;
     db.query(sql4, (err,data)=> {
     if(err)
        throw err;
       console.log("record inserted");
        });
     res.render('ticket_page',{'flight':flight, 'name': name, 'seat':seat, 'pnr':pnr, 'phone':phone, 'from':from, 'to':to,'date':date, 'health':health});
});

app.post('/cancel', (req,res) => {
  console.log('cancel clicked');
  var pnr= req.body.pnr;
  console.log(pnr);
  var sql3 = `DELETE FROM TICKET WHERE PNR='${pnr}'`;
  db.query(sql3, (err,data)=> {
  if(err)
     throw err;
    console.log("record deleted");
     });
   res.render("home_page");
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
