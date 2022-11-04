require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
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
const regionRouter = require('./router/regions');

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());

// 파일 길이가 너무 길어서  limit 최대치.
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: false }));

app.use(cookieParser());

app.use('/articles', articleRouter);
app.use('/users', userRouter);
app.use('/web3', web3Router);
app.use('/regions', regionRouter);

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

app.listen(port, () => {
  console.log(`[RUN] Server... | http://localhost:${port}`);
});

module.exports = app;
