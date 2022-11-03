const { find, signup, login, refresh, uploadProfile } = require('../controller/users');
const express = require('express');
const router = express.Router();

router.get('/', find);
router.post('/signup', signup);
router.post('/login', login);
router.get('/refresh', refresh);
router.post('/uploadProfile', uploadProfile);


module.exports = router;
