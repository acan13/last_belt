var mongoose = require('mongoose')

var ListSchema = new mongoose.Schema({
  //schema stuff
  title:{type:String, required:true, minlength:5},
  description:{type:String, required:true, minlength:10},
  creator:{type:String, required:true},
  status:{type:Boolean}
}, {timestamps:true})

mongoose.model("List",ListSchema)
module.exports = mongoose.model("List")
