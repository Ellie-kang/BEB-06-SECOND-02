const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: String,
  password: String,
  salt: String,
  account: String
});

const User = mongoose.model('User', schema, 'Takoyaki-User');

module.exports = User;
