const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  continent: {
    type: String,
    required: true
  }
});

// save 직전 작동하는 pre hook 함수
schema.pre('save', function (next) {
  // 생성 날짜를 자동 기입함
  this.createdAt = new Date();
  next();
});

const Region = mongoose.model('Region', schema, 'Takoyaki-Region');

module.exports = Region;
