const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const newAccount = require('../utility/createAccount');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

// user ObjectID와 article의 userId 연결하기.

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
  profileImage: String,
  createdAt: Date,
  address: {
    type: String
  },
  tokenAmount: Number
});

schema.plugin(uniqueValidator);

// save 직전 작동하는 pre hook 함수
schema.pre('save', function (next) {
  // 생성 날짜를 자동 기입함
  this.createdAt = new Date();

  // 비밀번호 해싱
  if (this.isModified('password')) {
    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    const encrypted = bcrypt.hashSync(this.password, salt);
    this.password = encrypted;
  }

  // 1. address가 없으면 address를 생성.
  // 2. if 로직이 필요없을거같고, web3 transfer 함수를 보내면 될거같고.
  this.address = newAccount.address;

  next();
});

schema.methods.compare = bcrypt.compare;

const User = mongoose.model('User', schema, 'Takoyaki-User');

module.exports = User;
