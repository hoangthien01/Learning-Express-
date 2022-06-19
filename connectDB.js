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

//#region Create

// UserModel.create({
//   name: 'Linda',
//   Age: 33
// })

//#endregion


//#region Update
// UserModel.updateOne({ name: 'Thien' }, {
//   name: 'HoangThien'
// }).then(data => {
//   console.log('data', data)
// }).catch(error => {
//   console.log('err', error)
// });
//#endregion

//#region Find
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

//#endregion

//#region Delete
// UserModel.deleteOne({ name: 'Thien' }).then(data => {
//   console.log('data', data)
// }).catch(error => {
//   console.log('err', error)
// });
//#endregion