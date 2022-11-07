const Article = require('../model/article');
const User = require('../model/user');
const Comment = require('../model/comment');
const Region = require('../model/region');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { sendtoken3, sendtoken5 } = require('../utility/sendToken');

const find = async (req, res) => {
  // Article.findOne({city : req.query});
  const _queries = req.query;
  // 기존 아티클 도큐먼트에 다른 DB의 도큐먼트를 가져오는 코드
  const articles = await Article.aggregate([
    // /article?queries라는 uri에서 queries에 해당되는 부분을
    // 유저DB에서 글쓴이를 가져옴
    {
      $lookup: {
        from: 'Takoyaki-User',
        localField: 'userId',
        foreignField: '_id',
        as: 'author'
      }
    },
    // 코멘트DB에서 코멘트를 가져옴
    {
      $lookup: {
        from: 'Takoyaki-Comment',
        localField: '_id',
        foreignField: 'articleId',
        pipeline: [
          {
            $lookup: {
              from: 'Takoyaki-User',
              localField: 'userId',
              foreignField: '_id',
              as: 'author'
            }
          },
          {
            $project: {
              userId: 0,
              articleId: 0,
              author: {
                password: 0
              }
            }
          }
        ],
        as: 'comments'
      }
    },
    { $unwind: '$author' },
    {
      $lookup: {
        from: 'Takoyaki-Region',
        localField: 'city',
        foreignField: '_id',
        pipeline: [],
        as: 'city'
      }
    },
    { $set: { city: { $first: '$city' } } },
    { $set: { city: '$city.city' } },
    {
      $project: {
        userId: 0,
        author: {
          password: 0
        }
      }
    },
    // match로 필터함
    { $match: _queries }
  ]);

  res.send(articles);
};

const findOne = async (req, res) => {
  const { id } = req.params;
  const article = await Article.aggregate([
    {
      $match:
      {
        _id: mongoose.Types.ObjectId(id)
      }
    },
    // 유저DB에서 글쓴이를 가져옴
    {
      $lookup: {
        from: 'Takoyaki-User',
        localField: 'userId',
        foreignField: '_id',
        as: 'author'
      }
    },
    // 코멘트DB에서 코멘트를 가져옴
    {
      $lookup: {
        from: 'Takoyaki-Comment',
        localField: '_id',
        foreignField: 'articleId',
        pipeline: [
          {
            $lookup: {
              from: 'Takoyaki-User',
              localField: 'userId',
              foreignField: '_id',
              as: 'author'
            }
          },
          {
            $project: {
              userId: 0,
              articleId: 0,
              author: {
                password: 0
              }
            }
          }
        ],
        as: 'comments'
      }
    },
    { $unwind: '$author' },
    {
      $lookup: {
        from: 'Takoyaki-Region',
        localField: 'city',
        foreignField: '_id',
        pipeline: [],
        as: 'city'
      }
    },
    { $set: { city: { $first: '$city' } } },
    { $set: { city: '$city.city' } },
    {
      $project: {
        userId: 0,
        author: {
          password: 0
        }
      }
    }
  ]);

  res.send(article[0]);
};

const _delete = async (req, res) => {
  try {
    const token = req.cookies.token;
    const data = jwt.verify(token, process.env.SECRET);
    const author = await User.findOne({ userId: data.userId }, '_id');

    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (!comment) throw new Error('Not an existed comment');

    console.log(author._id.toString(), comment.userId.toString());
    if (author._id.toString() !== comment.userId.toString()) throw new Error('You did not write the comment you try to delete.');

    const deleted = await Comment.findByIdAndDelete(id);

    res.status(202).json({ deleted });
  } catch (error) {
    const msg = {};
    msg[`${error.name}`] = `${error.message}`;
    console.error(`${error.name} : ${error.message}`);
    res.status(406).json(msg);
  }
};

const write = async (req, res) => {
  try {
    // Authorization 헤더에 jwt token을 넣고 보낸 요청인 경우
    // req.auth라는 오브젝트 값으로 userId를 받을 수 있다.

    const { title, content, imgFile, city } = req.body;

    const token = req.cookies.token;
    const data = jwt.verify(token, process.env.SECRET);
    const author = await User.findOne({ userId: data.userId }, '_id address tokenAmount');
    const _city = await Region.findOne({ city: city }, '_id');

    // 여기서 필요한 userId는 User DB의 _id를 기입합니다.
    // 따라서 userId로 User model를 필터하여 필요한 _id 정보만 가져와서
    // userId에 넣습니다.
    const article = new Article({
      title,
      content,
      imgFile,
      city: _city._id,
      userId: author._id
    });

    const result = await sendtoken5(author.address);

    await User.findOneAndUpdate({ userId: data.userId }, { tokenAmount: author.tokenAmount + 5 }, {

      returnOriginal: false
    });

    const newDocument = await article.save();
    res.status(201).json({ newDocument, result });
  } catch (error) {
    const msg = {};
    msg[`${error.name}`] = `${error.message}`;
    console.error(`${error.name} : ${error.message}`);
    res.status(400).json(msg);
  }
};

const comment = async (req, res) => {
  try {
    const token = req.cookies.token;
    const data = jwt.verify(token, process.env.SECRET);
    const author = await User.findOne({ userId: data.userId }, '_id address tokenAmount');
    const { content, articleId } = req.body;

    const comment = new Comment({
      content,
      articleId,
      userId: author._id
    });

    await sendtoken3(author.address);

    await User.findOneAndUpdate({ userId: data.userId }, { tokenAmount: author.tokenAmount + 3 }, {

      returnOriginal: false
    });

    const newDocument = await comment.save();
    res.status(201).send(newDocument);
  } catch (error) {
    const msg = {};
    msg[`${error.name}`] = `${error.message}`;
    console.error(`${error.name} : ${error.message}`);
    res.status(400).json(msg);
  }
};

const like = async (req, res) => {
  try {
    const token = req.cookies.token;
    const data = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ userId: data.userId }, '_id userId');

    const { articleId } = req.body;
    const article = await Article.findById(articleId);

    // 중복 아이디 검사 조건문
    const _loverIdx = article.like.findIndex(_lover => _lover.userId === user.userId);
    const articleLover = article.like[_loverIdx];

    // 만약 like를 누른 사람이 없다면
    // like 목록에 추가하고
    // 있을 경우 지운다
    if (!articleLover) {
      article.like.push(user);
    } else {
      article.like.splice(_loverIdx, 1);
    }

    const updatedDocument = await article.save();
    res.status(201).json({ updatedDocument, likeCount: updatedDocument.like.length });
  } catch (error) {
    const msg = {};
    msg[`${error.name}`] = `${error.message}`;
    console.error(`${error.name} : ${error.message}`);
    res.status(400).json(msg);
  }
};

module.exports = {
  find,
  findOne,
  _delete,
  write,
  comment,
  like
};
