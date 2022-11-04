const { find, _delete, write, comment, like } = require('../controller/articles');
const express = require('express');
const router = express.Router();

router.get('/', find);
router.delete('/comment/:id', _delete);
router.post('/write', write);
router.post('/comment', comment);
router.patch('/like', like);

module.exports = router;
