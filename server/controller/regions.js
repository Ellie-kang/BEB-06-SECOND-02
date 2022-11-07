require('dotenv').config();
const Region = require('../model/region');

const listByRegion = async (req, res) => {
  const _queries = req.query;
  // 기존 아티클 도큐먼트에 다른 DB의 도큐먼트를 가져오는 코드
  const regions = await Region.aggregate([
    { $sort: { region: 1, city: 1 } },
    {
      $group: {
        _id: '$region',
        cities: { $push: '$city' }
      }
    },
    {
      $project: {
        _id: 0,
        region: '$_id',
        cities: 1
      }
    },
    { $sort: { region: 1 } },
    { $match: _queries }
  ]);

  res.send(regions);
};

module.exports = {
  listByRegion
};
