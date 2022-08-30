const jwt = require('jsonwebtoken')

var data = {
  name: 'Thien',
  age: 21
};

// const token = jwt.sign(data, 'thien', {
//   expiresIn: 30
// })
// console.log(token)

const dataDecoded = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhpZW4iLCJhZ2UiOjIxLCJpYXQiOjE2NjEwOTgzMjAsImV4cCI6MTY2MTA5ODM1MH0.fZTMOY1jDx0clQP_tC1U8SFsCUoq9nTwssrh1K-kl5E', 'thien');
console.log(dataDecoded);