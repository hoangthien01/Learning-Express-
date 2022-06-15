const express = require("express");

var app = express();
var router1 = require('./apiRouter')

app.use('/api/v1', router1)

app.get("/", (req, res, next) => {
  res.json("Home");
});

app.listen(3000, () => {
  console.log("Server is runing!");
});
