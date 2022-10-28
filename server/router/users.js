const { find, signup, login } = require('../controller/users');
const express = require('express');
const router = express.Router();

router.get('/', find);
router.post('/signup', signup);
router.post('/login', login);

module.exports = router;
