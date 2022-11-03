require('dotenv').config();
const Article = require('../model/article');
const Region = require('../model/region');

const find = async (req, res) => {
  const _queries = req.query;
  console.log(_queries)
  // 기존 아티클 도큐먼트에 다른 DB의 도큐먼트를 가져오는 코드
  const articles = await Article.aggregate([
    // /article?queries라는 uri에서 queries에 해당되는 부분을
    // match로 필터함
    { $match: _queries },
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
      $project: {
        userId: 0,
        author: {
          password: 0
        }
      }
    }
  ]);

  res.send(articles);
};

module.exports = {
  find
};
