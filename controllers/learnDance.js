var express = require('express');
var app = express();
var router = express.Router();
var user = require('../models/userSchema');

router.post('/learnDance', function(req, res) {
  var id=req.body.id;
  user.findByIdAndUpdate(id,{$inc:{"lionDance.learnDance.visit":1,"lionDance.learnDance.timeSpend":req.body.timeSpend}},function (err,data) {
       if(err) throw err;
       console.log(data);
       res.send(data);
   });

});

module.exports = router;
