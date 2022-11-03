const {find} = require('../controller/regions');
const express = require('express');
const router = express.Router();

router.get('/', find);

module.exports = router;