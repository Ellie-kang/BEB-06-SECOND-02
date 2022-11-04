const { listByRegion } = require('../controller/regions');
const express = require('express');
const router = express.Router();

router.get('/', listByRegion);

module.exports = router;
