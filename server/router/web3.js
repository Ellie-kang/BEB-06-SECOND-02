const { reward, transfer } = require('../controller/web3');
const express = require('express');
const router = express.Router();

router.post('/reward', reward);
router.post('/transfer', transfer);

module.exports = router;
