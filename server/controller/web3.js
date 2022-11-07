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
  const {address, tokenUrl, tokenAmount } = req.body;
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





  // 1. erc 721 contract를 배포한다.
  // 2. 배포한 컨트랙트 주소를 가져온다.
  // 3. user_send(transferfrom) 메소드를 이용해, 2번에서 가져온 컨트랙트 주소에 TAKO를 tokenAmount만큼 전송한다. -> DB 저장.
  // 3-1. 여기서 실제 address 주소로 양도가 이루어지는게 아니라, tokenAmount 가 req.body로 일정양만큼 들어오면? 그냥 민팅 해주는 방식.

  // 민팅이 완료되면 클라이언트에서 opensea API를 사용해서 가져오는 로직으로.


module.exports = {
  userSend,
  mintNft
};
