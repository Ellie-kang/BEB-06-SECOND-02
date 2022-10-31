const Article = require('../model/article');

const find = async (req, res) => {
  const _queries = req.query;
  const articles = await Article.find(_queries);
  res.send(articles);
};

const write = async (req, res) => {
  const { title, content, author } = req.body;

  const article = new Article({
    title,
    content,
    author
  });

  try {
    const validation = article.validateSync();
    if (validation) throw validation.errors;

    const newDocument = await article.save();
    res.status(201).send(newDocument);
  } catch (errors) {
    res.status(400).send({ errors });
  }
};

module.exports = {
  find,
  write
};
