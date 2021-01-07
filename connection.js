//jshint esversion: 6
var mysql = require('mysql');


var pool = mysql.createPool({
  connectionLimit:4,
  host: "bc4wleyqxkeael6nqm-mysql.services.clever-cloud.com",
  user: "",
  password: "",
  database:"bc4wleyqxkeael6nqm"
});

pool.getConnection((err,connection)=> {
  if(err)
  throw err;
  console.log('Database connected successfully');
  connection.release();
});

module.exports = pool;
