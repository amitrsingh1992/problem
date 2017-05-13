var express = require('express');
var app = express();
var router = express.Router();
var user = require('../models/userSchema');


 router.post('/welcome', function(req, res) {
   var Data = {
     name:req.body.Name
   }
   var userObj = new user(Data)
    userObj.save( function (err,data) {
      console.log(err);
        if(err) throw err;
        console.log("saved data",data);
        res.send(data)
    });

});

module.exports = router;
