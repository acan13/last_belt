path = require('path')
var answers = require('../controllers/answers_controller.js')
var questions = require('../controllers/questions_controller.js')
var users = require('../controllers/users_controller.js')
var sessions = require('../controllers/sessions_controller.js')
// add required models here

module.exports = (app) => {
  // add routes here
  app.get('/answers',answers.index),
  app.get('/answers/:answer_id/destroy',answers.destroy),
  app.post('/answers/:answer_id',answers.update),
  app.get('/answers/:answer_id',answers.show),
  app.post('/answers',answers.create),

  app.get('/questions',questions.index),
  app.get('/questions/:question_id/destroy',questions.destroy),
  app.post('/questions/:question_id',questions.update),
  app.get('/questions/:question_id',questions.show),
  app.post('/questions',questions.create),

  app.get('/users',users.index),
  app.get('/users/:id/destroy',users.destroy),
  app.post('/users/:id',users.update),
  app.get('/users/:id',users.show),
  app.post('/users',users.create),

  app.get('/sessions', sessions.show),
  app.post('/sessions', sessions.create),
  app.get('/sessions/delete', sessions.destroy),

  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/index.html"))
  });
}
