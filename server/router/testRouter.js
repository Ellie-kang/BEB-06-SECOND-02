const { findAll, approve } = require('../controller/test');
const express = require('express');
const router = express.Router();

router.get('/', findAll);

router.get('/approve', approve);

module.exports = router;
