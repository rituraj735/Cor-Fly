exports.login= function(req, res){
  var db= require('./connection.js');
  var message = '';
  var sess = req.session;

  if(req.method == "POST"){
    var post = req.body;
    var name = post.user_name;
    var pass = post.psw;

    var sql = "SELECT id, username, password FROM `AUTH` WHERE `username`='"+name+"' and password = '"+pass+"'";
    db.query(sql , (err, results)=> {
      if(results.length){
        req.session.userId = results[0].id;
        req.session.user = results[0];
        console.log(results[0].id);
        db.release();
        res.render('flight_reg');
      }
      else{
        message = 'Wrong Credentials';
        res.render('home_page', {message: message});
      }
    });
  } else {
    console.log("error idhar hai");
  }
};
