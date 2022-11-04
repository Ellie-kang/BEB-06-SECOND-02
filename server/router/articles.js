const { find, write, comment, like } = require('../controller/articles');
const express = require('express');
const router = express.Router();

router.get('/', find);
router.post('/write', write);
router.post('/comment', comment);
router.patch('/like', like);

module.exports = router;
