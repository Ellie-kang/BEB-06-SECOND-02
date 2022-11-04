const { find, _delete, write, comment, like } = require('../controller/articles');
const express = require('express');
const router = express.Router();

router.get('/', find);
router.delete('/comment/:id', _delete);
router.post('/write', write);
router.post('/comment', comment); // delete는 똑같이 여기로 보내는데 query만 추가.
router.patch('/like', like);

module.exports = router;
