const { find, write } = require('../controller/articles');
const express = require('express');
const router = express.Router();

router.get('/', find);
router.post('/write', write);

module.exports = router;
