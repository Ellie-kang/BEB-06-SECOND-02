const User = require('../model/user');

const find = async (req, res) => {
  const user = await User.find();
  res.send(user);
};

const signup = async (req, res) => {
  const { userId, password, salt } = req.body;

  // 여기 있는 account 데이터는 추후 이더리움 노드와 연동되면 채워질 부분입니다.
  const user = new User({
    userId,
    password,
    salt,
    account: null
  });

  const user_data = await User.find();

  let overlap = user_data.some((el) => { //아이디 중복확인
    if (el.userId == userId) {
      return true; // break
    }
    else {
      return false;
    }
  });

  if (overlap) { //아이디 중복일시
    res.status(403).send();
  }
  else {
    user.validate().then(
      async (error) => {
        if (error) {
          res.status(400).send({ error });
        } else {
          const newDocument = await user.save();
          res.status(201).send(newDocument);
        }
      }
    );
  }
};

const login = async (req, res) => {
  res.status(501).send();
  // const { title, content, author } = req.body;

  // const article = new Article({
  //   title,
  //   content,
  //   author
  // });

  // article.validate().then(
  //   async (error) => {
  //     if (error) {
  //       res.status(400).send({ error });
  //     } else {
  //       const newDocument = await article.save();
  //       res.status(201).send(newDocument);
  //     }
  //   }
  // );
};

module.exports = {
  find,
  signup,
  login
};
