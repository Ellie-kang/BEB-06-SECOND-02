const Article = require('../model/article');
const Comment = require('../model/comment');

const find = async (req, res) => {
  const _queries = req.query;
  const articles = await Article.find(_queries);
  res.send(articles);
};

const write = async (req, res) => {
  console.log(req);
  const { title, content, userId } = req.body;

  const article = new Article({
    title,
    content,
    userId
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

const comment = async (req, res) => {
  console.log(req);
  const { content, postId, userId } = req.body;

  const comment = new Comment({
    content,
    postId,
    userId
  });

  try {
    const validation = comment.validateSync();
    if (validation) throw validation.errors;

    const newDocument = await comment.save();
    res.status(201).send(newDocument);
  } catch (errors) {
    res.status(400).send({ errors });
  }
};

module.exports = {
  find,
  write,
  comment
};
