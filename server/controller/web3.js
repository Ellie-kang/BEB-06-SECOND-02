const {user_send } = require('../utility/sendtoken');
require('dotenv').config();
const User = require('../model/user');
const jwt = require('jsonwebtoken');

const userSend = async (req, res) => {
  // 전부다 string
  // sender는 추후에 쿠키를 통해서 인증 하는 걸로 바꿔도 됨
  const {recipient, amount } = req.body;
  const token = req.cookies.token;
  try {
    const data = jwt.verify(token, process.env.SECRET);
    const userId = data.userId;
    const user = await User.findOne({ userId }, 'address tokenAmount');
    const recip = await User.findOne({address: recipient}, 'tokenAmount');

    const result = await user_send(user.address, recipient, amount);

    if(result){
      await User.findOneAndUpdate({userId: userId}, {tokenAmount: user.tokenAmount - Number(amount)}, {
        returnOriginal: false
      });
      await User.findOneAndUpdate({address: recipient}, {tokenAmount: recip.tokenAmount + Number(amount)}, {
        returnOriginal: false
      });
      res.status(200).json('complete');
    }
    else{
      res.status(400).json('transaction error')
    }
  } catch (error) {
    res.status(401).json(error);
  }
};

const mintNft = async (req, res) => {
  const token = req.cookies.token;
  try {
    const data = jwt.verify(token, process.env.SECRET);
    const userId = data.userId;
    const user = await User.findOne({ userId }, 'address tokenAmount');
    const result = await user_send(user.address, "0xA5E535B4c93751d0C72316dA4F6FdC6cb61BC09B", "10");

    // const result_mint mint logic
    if(result){
      await User.findOneAndUpdate({userId: userId}, {tokenAmount: user.tokenAmount - 10}, {
        returnOriginal: false
      });
      res.status(200).json('complete');
    }
    else{
      res.status(400).json('transaction error')
    }
  } catch (error) {
    res.status(401).json(error);
  }

}


module.exports = {
  userSend,
  mintNft
};
