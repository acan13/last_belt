var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  //schema stuff
  name:{type:String, required:true, minlength:2},
}, {timestamps:true})

mongoose.model("User",UserSchema)
module.exports = mongoose.model("User")
