const Article = require('../model/article');
const Comment = require('../model/comment');

const find = async (req, res) => {
  const _queries = req.query;
  const articles = await Article.find(_queries);
  res.send(articles);
};

const write = async (req, res) => {
  try {
    // Authorization 헤더에 jwt token을 넣고 보낸 요청인 경우
    // req.auth라는 오브젝트 값으로 userId를 받을 수 있다.
    if (!req.auth) throw new Error('Unauthorized to write an article. Please sign in.');
    const { title, content } = req.body;

    const article = new Article({
      title,
      content,
      userId: req.auth.userId
    });

    const validation = article.validateSync();
    if (validation) throw validation.errors;

    const newDocument = await article.save();
    res.status(201).send(newDocument);
  } catch (error) {
    res.status(400).send({ error });
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
