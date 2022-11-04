const { find, write, comment, like } = require('../controller/articles');
const express = require('express');
const router = express.Router();

router.get('/', find);
router.post('/write', write);
router.post('/comment', comment); // delete는 똑같이 여기로 보내는데 query만 추가.
router.patch('/like', like);

module.exports = router;
