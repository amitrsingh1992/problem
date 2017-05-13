var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var  Schema = mongoose.Schema,

userSchema = new Schema({
    name: {
      type: String
    },
    lionDance:{
      helpLion:{
        progress:{
          type:Number,
          default:8
        },
        visit:{
          type:Number,
          default:0
        },
        timeSpend:{
          type:Number,
          default:0
        }
      },
      learnDance:{
        progress:{
          type:Number,
          default:15
        },
        visit:{
          type:Number,
          default:0
        },
        timeSpend:{
          type:Number,
          default:0
        }
      }
    }
  });
// mongooseErrorHandler = require('mongoose-error-handler');
 var user = mongoose.model("user", userSchema,"data");
 module.exports = user;

// userSchema.pre("save",function (next,done) {
//
// });
//
// function save(callback) {
//   userModel.findOne(callback)
// //   var userData = new userModel({name: "Amit"});
// //   console.log(userData);
// //   var error = userData.validateSync();
// // console.log(error);
// //   userData.save(function(err, data) {
// //     //console.log('data', data);
// //     if (err) {
// //       callback(errorHelper(err));
// //       // console.log(err);
// //     }
// //     console.log("saved");
// //   });
// }
// function update(id,cb) {
//   // userModel.findById(id,cb)
//   userModel.findByIdAndUpdate(id,{$inc:{"lionDance.helpLion.visit":120}},{new:true},cb)
// }
// update("5916dbd86079961a088a400d",function (err,data) {
//   console.log(err);
//   console.log(data);
// })
// // save(function(err, data) {
// // console.log(data);
// // });
