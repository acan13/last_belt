var session = require('express-session')
var User = require('../models/User.js')

module.exports = {
  create: (req,res) => {},
  show: (req,res) => {
    console.log('running session show method')
    console.log('session data',session.user_id)
    User.findOne({_id:session.user_id}, (err, user) => {
      if (err) {
        console.log('error finding user in session')
        return res.json(err)
      }
      console.log('user',user)
      return res.json(user)
    })
  },
  destroy: (req,res) => {
    if ('user_id' in session) {
      delete session.user_id
      return res.json({output: "logged out"})
    }
    return res.json({output: "not logged in"})
  }
}
