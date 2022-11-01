const mongoose = require('mongoose');


const schema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created_at: Date
});

const Article = mongoose.model('Article', schema, 'Takoyaki-Article');

module.exports = Article;
