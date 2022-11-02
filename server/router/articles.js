const { find, write, comment } = require('../controller/articles');
const express = require('express');
const router = express.Router();

router.get('/', find);
router.post('/write', write);
router.post('/comment', comment);

module.exports = router;
