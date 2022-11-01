require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
const { expressjwt: jwtMiddleware } = require('express-jwt');

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
const web3Router = require('./router/web3');

app.use(cors());
app.use(express.json());

app.use('/articles', articleRouter);
app.use('/users', userRouter);
app.use('/', web3Router);

app.get('/', (req, res) => {
  res.status(200).send('Welcome');
});

app.use(
  jwt({
    secret: process.env.SECRET,
    credentialsRequired: false,
    algorithms: ['HS256']
  }).unless({ path: ['/token'] })
);

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
