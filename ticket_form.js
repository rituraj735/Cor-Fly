//jshint esversion : 6
exports.ticket= (req,res, next )=> {
 var db= require('./connection.js');
 var name = req.body.name;
 var email = req.body.email;
 var phone = req.body.phone;
 var age = req.body.age;
 var dept = req.body.depart;
 var flight_from = req.body.flight_source;
 var flight_to = req.body.flight_dest;
 var temp = req.body.temp;
 var travel = req.body.travel;
 var covid = req.body.corona;
 function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

var pnr = makeid(5);
 console.log(pnr);
 console.log(name , email, phone, age, dept, flight_from , flight_to);


 let flight_no ='';
 var sql1 = `SELECT Flight_Number FROM FLIGHT WHERE Destination='${flight_to}' AND Origen='${flight_from}'`;
 db.query(sql1, (err,result, fields)=> {
 if(err)
    throw err;
   else{
   // console.log(result[0].Flight_Number);
   flight_no = result[0].Flight_Number;
   var sql2 = `INSERT INTO TICKET (PNR,date1,Flight_Number) values('${pnr}','${dept}','${flight_no}')`;
   db.query(sql2, (err,data)=> {
   if(err)
      throw err;
     console.log("record inserted");
     var sql= `INSERT INTO PERSON (Name1,age,Mail,Phone, PNR, Temperature, Travel_History,Corona_ve_report ) values('${name}', ${age}, '${email}', ${phone},'${pnr}',${temp},'${travel}','${covid}')`;
     db.query(sql, (err,data)=> {
     if(err)
        throw err;
       console.log("record inserted");
      
        });
      });




 // var sql3 = `INSERT INTO SEAT (Flight_NUmber) values('${flight_no.name}')`;
 // db.query(sql3, (err,data)=> {
 // if(err)
 //    throw err;
 //   console.log("record inserted");
 //    });

   console.log(flight_no);}
   res.render('seat', {'flight': result[0].Flight_Number, 'pnr': pnr,'name': name, 'phone': phone, 'from': flight_from,'to':flight_to,'date':dept,'health':covid});
    });
   // console.log(flight_no.name);


  // var sql= `INSERT INTO TICKET (PNR,date1)`

};
