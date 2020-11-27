//jshint esversion: 6
var mysql = require('mysql');


var conn = mysql.createConnection({
  host: "bc4wleyqxkeakwel6nqm-mysql.services.clever-cloud.com",
  user: "ukwedoierr9smgmi",
  password: "44m52UgbR3YqlIiEa4Wr",
  database:"bc4wleyqxkeakwel6nqm"
});

conn.connect((err)=> {
  if(err)
  throw err;
  console.log('Database connected successfully');
});

module.exports = conn;
