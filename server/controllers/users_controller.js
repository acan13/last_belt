var User = require('../models/User.js')
var session = require('express-session')

module.exports = {
  index: (req,res) => {
    console.log('running users index method')
    User.find({}, (err,users) => {
      if (err) {
        console.log('error finding users')
        console.log(err)
        return res.json(err)
      } else {
        console.log('found users')
        return res.json(users)
      }
    })
  },
  destroy: (req,res) => {
    User.findByIdAndRemove(req.params.id, (err,user) => {
      if (err) {
        console.log('error finding user')
        console.log(err)
        return res.json(err)
      } else {
        console.log('deleted user')
        return res.json(user)
      }
    })
  },
  update: (req,res) => {
    console.log('running user update method')
    User.findOne({_id:req.params.question_id}, (err, user) => {
      if (err) {
        console.log('error finding user')
        console.log(err)
        return res.json(err)
      } else {
        // do something with the user
        user.save((error) => {
          if (error) {
            console.log('error saving user')
            return res.json(error)
          } else {
            console.log('updated user')
            return res.json(user)
          }
        })
      }
    })
  },
  show: (req,res) => {
    console.log('running users show route')
    User.findOne({_id:req.params.id},(err,user) => {
      if (err) {
        console.log('error finding user')
        return res.json(err)
      } else {
        console.log('found user')
        return res.json(user)
      }
    })
  },
  create: (req,res) => {
    console.log('running users create method')
    var user = new User(req.body)
    user.save((err) => {
      if (err) {
        console.log('error creating user')
        console.log(err)
        return res.json(err)
      } else {
        console.log('created user')
        return res.json(user)
      }
    })
  }
}
