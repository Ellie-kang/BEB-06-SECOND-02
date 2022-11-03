const { sendtoken3, sendtoken5, user_send } = require('../utility/sendtoken');

const userSend = async (req, res) => {
  // 전부다 string
  // sender는 추후에 쿠키를 통해서 인증 하는 걸로 바꿔도 됨
  const { sender, recipient, amount } = req.body;

  // sendtoken3("0x74dEFA900b755c60c02c77e54034C56Eb531E583");
  // sendtoken5("0x74dEFA900b755c60c02c77e54034C56Eb531E583");
  await user_send(sender, recipient, amount);
};

module.exports = {
  userSend
};
