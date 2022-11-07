const { userSend, mintNft} = require('../controller/web3');
const express = require('express');
const router = express.Router();

router.post('/userSend', userSend);
router.post('/mintNft', mintNft);

module.exports = router;
