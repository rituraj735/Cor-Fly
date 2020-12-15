//jshint esversion: 6
var mysql = require('mysql');


var pool = mysql.createPool({
  connectionLimit:4,
  host: "bc4wleyqxkeakwel6nqm-mysql.services.clever-cloud.com",
  user: "ukwedoierr9smgmi",
  password: "44m52UgbR3YqlIiEa4Wr",
  database:"bc4wleyqxkeakwel6nqm"
});

pool.getConnection((err,connection)=> {
  if(err)
  throw err;
  console.log('Database connected successfully');
  connection.release();
});

module.exports = pool;
