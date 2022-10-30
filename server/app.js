require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

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

app.get('/', (req, res) => {
  res.status(200).send('Welcome');
});

app.use((req, res, next) => {
  res.status(404).send('Not Found!');
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
