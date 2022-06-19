const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Learning', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Schema = mongoose.Schema;
const user = new Schema({
  name: String,
  Age: Number
}, { collection: 'User' });
const UserModel = mongoose.model('user', user);
// UserModel.create({
//   name: 'Linda',
//   Age: 33
// })

UserModel.find({}, (err, res) => {
  console.log(res);
})
  // .then((data) => {
  //   console.log('data', data);
  // })
  // .catch((err) => {
  //   console.log('Error', err);
  // });


// let aaa = UserModel.find({}).exec();

// aaa.then((data) => {
//   console.log('data', data);

// })
// setTimeout(() => {
//   console.log('Error', aaa);
// }, 2000)
