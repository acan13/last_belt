var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    routes = require('./server/config/routes.js'),
    path = require("path"),
    app = express(),
    port = 8000

require('./server/config/mongoose.js')

app.use(session({
  secret:'T7bJ0OiIS48b8JLjYc9RCnIqkIW2I9FEkr0h1B4CCdHXEdt44i',
  proxy:true,
  resave:true,
  saveUninitialized:true
}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) //required for angular
app.use(express.static(path.join(__dirname, "./public/dist"))) //change to "./client/static if not using angular"
app.set('views', path.join(__dirname, './client/views'))
app.set('view engine', 'ejs')

routes(app)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
