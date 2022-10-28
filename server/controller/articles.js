const Article = require('../model/article');

const find = async (req, res) => {
  const articles = await Article.find();
  res.send(articles);
};

const write = async (req, res) => {
  const { title, content, author } = req.body;

  const article = new Article({
    title,
    content,
    author
  });

  article.validate().then(
    async (error) => {
      if (error) {
        res.status(400).send({ error });
      } else {
        const newDocument = await article.save();
        res.status(201).send(newDocument);
      }
    }
  );
};

module.exports = {
  find,
  write
};
