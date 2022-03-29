const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');
const pingContoller = require('../controllers/ping');

router.get('/', rescue(pingContoller.getPong));

module.exports = router;
