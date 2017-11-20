var mongoose = require('mongoose')

var AnswerSchema = new mongoose.Schema({
  //schema stuff
  content:{type:String,required:true,minlength:10},
  details:{type:String},
  likes:{type:Number,required:true,default:0},
  author:String
}, {timestamps:true})

mongoose.model("Answer",AnswerSchema)
module.exports = mongoose.model("Answer")
