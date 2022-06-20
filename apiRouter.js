const express = require("express");
var router = express.Router()

router.get('/', (req, res) => {
  res.json('router1')
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