const _reward = require('../utility/reward');

const reward = async (req, res) => {
  _reward();
};

const transfer = async (req, res) => {
};

module.exports = {
  reward,
  transfer
};
