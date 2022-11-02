const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.ObjectId,
    required: true
  },
  articleId: {
    type: mongoose.ObjectId,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created_at: Date
});

// save 직전 작동하는 pre hook 함수
schema.pre('save', function (next) {
  // 생성 날짜를 자동 기입함
  if (!this.created_at) this.created_at = new Date();
  next();
});

const Comment = mongoose.model('Comment', schema, 'Takoyaki-Comment');

module.exports = Comment;
