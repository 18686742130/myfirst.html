var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
//router.get("/login",function(req,res){
//  res.render("login")
//});
//router.get("/regist",function(req,res){
//  res.render("regist")
//});
//router.post("/login",function(req,res){
//  var uname = req.body.username;
//  var pwd = req.body.qwe;
//  if(uname == '123' &&pwd == '1234'){
//    //res.send("success");
//    res.render("index" ,{
//      uname:uname
//    })
//  }
//  else{
//    res.send("false");
//  }
//});
//router.get("/checkname",function(req,res){
//  var name = req.query.uname;
//  if(name == "123"){
//    res.send("fail")
//  }else{
//    res.send("success")
//  }
//});
module.exports = router;
