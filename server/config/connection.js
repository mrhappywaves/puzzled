const mongoose = require('mongoose');

const mongoAddressDB = 'mongodb+srv://new_user_2:OAoKqXKoK2ZNMmzm@cluster0.zictj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_ENDPOINT || mongoAddressDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
