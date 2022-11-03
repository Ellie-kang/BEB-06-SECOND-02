const mongoose = require('mongoose');

/*
  { city, region } 형태로 데이터를 가져옵니다.
*/
const schema = new mongoose.Schema({
  city: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  createdAt: Date
});

// save 직전 작동하는 pre hook 함수
schema.pre('save', function (next) {
  // 생성 날짜를 자동 기입함
  this.createdAt = new Date();
  next();
});

const Region = mongoose.model('Region', schema, 'Takoyaki-Region');

module.exports = Region;
