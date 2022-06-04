const mongoose = require('mongoose');

// const mongoAddressDB = 'mongodb+srv://new_user_2:OAoKqXKoK2ZNMmzm@cluster0.zictj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
