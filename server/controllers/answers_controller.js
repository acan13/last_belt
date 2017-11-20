var Answer = require('../models/Answer.js')
var session = require('express-session')

module.exports = {
  index: (req,res) => {
    console.log('running answer index method')
    Answer.find({}, (err, answers) => {
      if (err) {
        console.log('error finding answers')
        console.log(err)
        return res.json(err)
      } else {
        console.log('found answers')
        return res.json(answers)
      }
    })
  },
  destroy: (req,res) => {
    console.log('running answer destroy method')
    Answer.findByIdAndRemove(req.params.answer_id, (err, answer) => {
      if (err) {
        console.log('error finding answer')
        console.log(err)
        return res.json(err)
      } else {
        console.log('found answer and deleted it')
        return res.json(answer)
      }
    })
  },
  update: (req,res) => {
    console.log('running answer update method')
    Question.findOne({_id:req.params.question_id},(err,question) => {
      if (err) {
        console.log('error finding question')
        return res.json(err)
      } else {
        console.log('found question',question)
        var answer = question.answers.id(req.params.answer_id)
        answer.likes++
        question.save((error) => {
          if (error) {
            console.log('error saving answer')
            return res.json(error)
          } else {
            console.log('updated likes')
            return res.json(answer)
          }
        })
      }
    })
  },
  show: (req,res) => {
    console.log('running answer show route')
    Answer.findOne({_id:req.params.answer_id},(err,answer) => {
      if (err) {
        console.log('error finding answer')
        return res.json(err)
      } else {
        console.log('found answer')
        return res.json(answer)
      }
    })
  },
  create: (req,res) => {
    console.log('running answer create method')
    Question.findOne({_id:req.params.question_id},(err,question) => {
      if (err) {
        console.log('error finding question')
        return res.json(err)
      } else {
        question.answers.push(req.body)
        question.save((error) => {
          if (error) {
            console.log('error saving answer')
            return res.json(error)
          } else {
            console.log('added answer to question')
            return res.json(question)
          }
        })
      }
    })
  }
}
