require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const credential = './credentials/X509-cert.pem';

mongoose.connect(process.env.MONGODB, {
  ssl: true,
  sslValidate: true,
  sslKey: credential,
  sslCert: credential
});

const port = 3001;

const articleRouter = require('./router/articles');
const userRouter = require('./router/users');

app.use(cors());
app.use(express.json());

app.use('/articles', articleRouter);
app.use('/users', userRouter);

app.use((req, res, next) => {
  console.log(req.headers);
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET, (err, decode) => {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});

app.get('/', (req, res) => {
  res.status(200).send('Welcome');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString()
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({
    message: 'Internal Server Error',
    stacktrace: err.toString()
  });
});

app.listen(port, () => {
  console.log(`[RUN] Server... | http://localhost:${port}`);
});

module.exports = app;
