const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  content: String,
  author: String
});

const Article = mongoose.model('Article', schema, 'Takoyaki-Article');

module.exports = Article;
