const { userSend } = require('../controller/web3');
const express = require('express');
const router = express.Router();

router.post('/userSend', userSend);
//router.post('/mint', mintNft)

module.exports = router;
