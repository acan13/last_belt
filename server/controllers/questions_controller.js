var Question = require('../models/Question.js')
var session = require('express-session')

module.exports = {
  index: (req,res) => {
    console.log('running questions index method')
    Question.find({}, (err,questions) => {
      if (err) {
        console.log('error finding questions')
        console.log(err)
        return res.json(err)
      } else {
        console.log('found questions')
        return res.json(questions)
      }
    })
  },
  destroy: (req,res) => {
    Question.findByIdAndRemove(req.params.question_id, (err,question) => {
      if (err) {
        console.log('error finding question')
        console.log(err)
        return res.json(err)
      } else {
        console.log('deleted question')
        return res.json(question)
      }
    })
  },
  update: (req,res) => {
    console.log('running question update method')
    Question.findOne({_id:req.params.question_id}, (err, question) => {
      if (err) {
        console.log('error finding question')
        console.log(err)
        return res.json(err)
      } else {
        // do something with the question
        question.save((error) => {
          if (error) {
            console.log('error saving question')
            return res.json(error)
          } else {
            console.log('updated question')
            return res.json(question)
          }
        })
      }
    })
  },
  show: (req,res) => {
    console.log('running questions show route')
    Question.findOne({_id:req.params.question_id},(err,question) => {
      if (err) {
        console.log('error finding question')
        return res.json(err)
      } else {
        console.log('found question')
        return res.json(question)
      }
    })
  },
  create: (req,res) => {
    console.log('running questions create method')
    var question = new Question(req.body)
    question.save((err) => {
      if (err) {
        console.log('error creating question')
        console.log(err)
        return res.json(err)
      } else {
        console.log('created question')
        return res.json(question)
      }
    })
  }
}
