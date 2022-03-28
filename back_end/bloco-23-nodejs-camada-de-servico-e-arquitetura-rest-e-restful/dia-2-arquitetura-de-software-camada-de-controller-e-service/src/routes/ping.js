const express = require('express');
const router = express.Router();
const pingContoller = require('../controllers/ping');

router.get('/', pingContoller.getPong);

module.exports = router;
