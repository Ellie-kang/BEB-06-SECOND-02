const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  salt: String,
  profile_image: Buffer,
  account: String
});

const User = mongoose.model('User', schema, 'Takoyaki-User');

module.exports = User;
