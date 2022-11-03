const Article = require('../model/article');
const User = require('../model/user');
const Comment = require('../model/comment');
const {sendtoken3, sendtoken5} = require('../utility/sendtoken');

const find = async (req, res) => {
  const _queries = req.query;
  // 기존 아티클 도큐먼트에 다른 DB의 도큐먼트를 가져오는 코드
  const articles = await Article.aggregate([
    // /article?queries라는 uri에서 queries에 해당되는 부분을
    // match로 필터함
    {$match: _queries},
    // 유저DB에서 글쓴이를 가져옴
    {$lookup: {
      from: 'Takoyaki-User',
      localField: 'userId',
      foreignField: '_id',
      as: 'author'
    }},
    // 코멘트DB에서 코멘트를 가져옴
    {$lookup: {
      from: 'Takoyaki-Comment',
      localField: '_id',
      foreignField: 'articleId',
      pipeline: [
        {$lookup: {
          from: 'Takoyaki-User',
          localField: 'userId',
          foreignField: '_id',
          as: 'author'
        }},
        {$project: {
          userId: 0,
          articleId: 0,
          author : {
            password : 0
          }
        }}
      ],
      as: 'comments'
    }},
    {$unwind: '$author'},
    {$project:{
      userId: 0,
      author : {
        password : 0
      }
    }}
  ]);

  res.send(articles);
};

const write = async (req, res) => {
  try {
    // Authorization 헤더에 jwt token을 넣고 보낸 요청인 경우
    // req.auth라는 오브젝트 값으로 userId를 받을 수 있다.

    // req.auth를 인식못함.
    //if (!req.auth) throw 'Unauthorized to write an article. Please sign in.';
    
    const { title, content, imgFile, userId } = req.body;
    //const author = await User.findOne({ userId: req.auth.userId }, '_id');
    
    const author = await User.findOne({userId: userId}, '_id account')
    console.log(author)

    // 여기서 필요한 userId는 User DB의 _id를 기입합니다.
    // 따라서 userId로 User model를 필터하여 필요한 _id 정보만 가져와서
    // userId에 넣습니다.
    const article = new Article({
      title,
      content,
      imgFile,
      userId: author._id
    });
    
    const newDocument = await article.save();
    const result = await sendtoken5(author.account);
    if(result){
      res.status(201).send(newDocument);
    }
    else{
      res.status(401).send('transaction err')
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

const comment = async (req, res) => {
  try {
    if (!req.auth) throw new Error('Unauthorized to write an article. Please sign in.');
    const { content, postId } = req.body;
    const author = await User.findOne({ userId: req.auth.userId }, '_id');

    const comment = new Comment({
      content,
      postId,
      userId: author._id
    });

    const newDocument = await comment.save();
    res.status(201).send(newDocument);
  } catch (error) {
    res.status(400).send({ error });
  }
};

module.exports = {
  find,
  write,
  comment
};
