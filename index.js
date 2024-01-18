const express = require('express')
var bodyParser = require('body-parser')
// const User=require('./models/user')
// const Contact=require('./models/contact')
require('./models');
var userCtrl=require('./controllers/userControllers');

const app = express()

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.get('/add', userCtrl.addUser);



// User.sync({ force: true });
// Contact.sync({ force: true });

// User.drop();

app.listen(3000,()=>{
    console.log('App will run on: http://localhost:3000')
})