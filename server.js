const express = require("express");

var app = express();
var bodyParser = require('body-parser')
var router1 = require('./apiRouter')
var checkLogined = (req, res, next) => {
  if (true) {
    console.log('Logined ')
    req.user = {
      // role: 'Admin'
    }
    next()
  } else {
    res.json('You are not logged in')
  }
}

var checkRoleUser = (req, res, next) => {
  if (req.user.role) {
    console.log('Logined and have role')
    next()
  } else {
    console.log('You are not logged in')
    // res.json('You are not logged in')
    next("Error")
  }
}

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/v1', router1)

app.get("/", checkLogined, (req, res, next) => {
  // res.json("Home");
  console.log('Middleware 1');
  next()
}, (req, res, next) => {
  console.log('Middleware 2');
  next()
}, (req, res, next) => {
  console.log('Middleware 3');
  // res.json("Home");
  next()
});

app.get("/admin", checkLogined, checkRoleUser, (req, res, next) => {
  console.log('All done');
});

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
