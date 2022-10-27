require('dotenv').config();

const express = require('express');
const router = express.Router();
const axios = require('axios');

const data = JSON.stringify({
  collection: 'Takoyaki-User',
  database: 'Takoyaki-DB',
  dataSource: 'Takoyaki-Cluster',
  projection: {
    _id: 1
  }
});

const config = {
  method: 'post',
  url: `${process.env.HOST}/action/findOne`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    'api-key': `${process.env.API_KEY}`
  },
  data
};

/* GET home page. */
router.get('/', function (req, res, next) {
  // console.log(config)
  axios(config)
    .then(function (response) {
      res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
      res.status(404).end();
      console.error(error);
    });
});

module.exports = router;
