const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

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
  profile_image: String,
  created_at: Date,
  address: String
});

schema.plugin(uniqueValidator);

// save 직전 작동하는 pre hook 함수
schema.pre('save', function (next) {
  // 생성 날짜를 자동 기입함
  if (!this.created_at) this.created_at = new Date();

  // 비밀번호 해싱
  if (this.isModified('password')) {
    const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
    const encrypted = bcrypt.hashSync(this.password, salt);
    this.password = encrypted;
  }

  next();
});

schema.methods.compare = bcrypt.compare;

const User = mongoose.model('User', schema, 'Takoyaki-User');

module.exports = User;
