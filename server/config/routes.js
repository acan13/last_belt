path = require('path')
var answers = require('../controllers/answers_controller.js')
var lists = require('../controllers/lists_controller.js')
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

  app.get('/lists',lists.index),
  app.get('/lists/:list_id/destroy',lists.destroy),
  app.post('/lists/:list_id',lists.update),
  app.get('/lists/:list_id',lists.show),
  app.post('/users/:id/lists',lists.create),

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
