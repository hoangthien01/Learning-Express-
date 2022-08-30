const express = require("express");
const AccountModel = require('./models/account')
//
var app = express();
var bodyParser = require('body-parser')
var router1 = require('./apiRouter')
var accountRouter = require('./routes/account');
//
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// Register
app.post("/register", (req, res, next) => {
  var username = req.body.username
  var password = req.body.password
  
  AccountModel.findOne({
    username: username,
  })
  .then((data) => {
    if (data) {
      res.json('This username is exsisted')
    } else {
      // for (let i=0; i< 20; i++) {
      //   AccountModel.create({
      //     username: username + i,
      //     password: password
      //   })
      // }
      // return true
      return AccountModel.create({
        username: username,
        password: password
      })
    }
  })
  .then(data => {
      res.json("Register success")
  })
  .catch((error) => {
    res.status(500).json('Register fail')
  })

})

//Login
app.post("/login", (req, res, next) => {
  var username = req.body.username
  var password = req.body.password

  AccountModel.findOne({
    username: username,
    password: password
  })
  .then(data => {
    if(data) {
      res.json('Login success')
    } else {
      res.status(400).json('Account not correct')
    }
  })
  .catch(error => {
    res.status(500).json('Server error')
  })
})

app.use('/api/v1', router1)

app.use('/api/account/', accountRouter)


// Case 1: Global port, all Middleware end with next() and not have next Middleware will be move to this Middleware
// Case 2: Handle error, if next have params and callback function have err parameter
app.use((err, req, res, next) => {
  console.log('Middleware final');
  res.json("Home");
  // next()
})

app.listen(3000, () => {
  console.log("Server is runing!");
});
