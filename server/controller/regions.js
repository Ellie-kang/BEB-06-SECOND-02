require('dotenv').config();
const Region = require('../model/region');

const listByRegion = async (req, res) => {
  const _queries = req.query;
  // 기존 아티클 도큐먼트에 다른 DB의 도큐먼트를 가져오는 코드
  const regions = await Region.aggregate([
    {
      $group: {
        _id: '$region',
        cities: { $addToSet: '$city' }
      }
    },
    { $match: _queries }
  ]);

  res.send(regions);
};

module.exports = {
  listByRegion
};
