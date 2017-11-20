var mongoose = require('mongoose')

var ListSchema = new mongoose.Schema({
  //schema stuff
  title:{type:String, required:true, minlength:5},
  description:{type:String, required:true, minlength:10},
  creator:{type:String, required:true},
  status:{type:Boolean}
}, {timestamps:true})

var UserSchema = new mongoose.Schema({
  //schema stuff
  name:{type:String, required:true, minlength:2},
  lists:[ListSchema]
}, {timestamps:true})

mongoose.model("User",UserSchema)
module.exports = mongoose.model("User")
