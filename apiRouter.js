const express = require("express");
const AccountModel = require('./models/account')
const PAGE_SIZE = 5
var router = express.Router()


router.get('/user', (req, res, next) => {
  var page = req.query.page
  page = parseInt(page)
  if (page) {
    page = page < 1 ? 1 : page
    var skip = (parseInt(page) - 1) * PAGE_SIZE
    AccountModel.find({})
    .skip(skip)
    .limit(PAGE_SIZE)
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      res.status(500).json("Server error")
    })
  } else {
    AccountModel.find({})
    .then(data => {
      res.json(data)
    })
    .catch(error => {
      res.status(500).json("Server error")
    })
  }
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.json('router1 post')
})

router.put('/', (req, res) => {
  res.json('router1 put')
})

router.delete('/', (req, res) => {
  res.json('router1 delete')
})

router.get('/user', (req, res) => {
  res.json('router1 user')
})

router.get('/contact', (req, res) => {
  res.json('router1 contact')
})

router.get('/user/:id', (req, res) => {
  res.json('router1 user ' + req.params.id)
})

module.exports = router