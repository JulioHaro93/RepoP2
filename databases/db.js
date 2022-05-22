const mongoose = require('mongoose');

//const {mongoEjemplo} = new mongoose.model();

mongoose.connect('mongodb://127.0.0.1:27017/pnew', {
  useNewUrlParser: true,
  useUnifiedTopology: true,

});


const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'))
connection.once('open', function () {
  // we're connected!
  console.log('db connected')
})

module.exports = mongoose;