const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.ObjectId,
    required: true
  },
  region: {
    type: mongoose.ObjectId
  },
  // imgFile 불러오기.
  imgFile: String,
  createdAt: Date
});

// save 직전 작동하는 pre hook 함수
schema.pre('save', function (next) {
  // 생성 날짜를 자동 기입함
  this.createdAt = new Date();
  next();
});

const Article = mongoose.model('Article', schema, 'Takoyaki-Article');

module.exports = Article;
