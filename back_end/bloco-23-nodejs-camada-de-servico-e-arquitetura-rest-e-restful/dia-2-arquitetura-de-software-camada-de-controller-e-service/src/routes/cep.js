const express = require('express');
const rescue = require('express-rescue');
const router = express.Router();
const cepController = require('../controllers/cep');

router.get('/:cep', rescue(cepController.getCepData));

router.post('/', rescue(cepController.createCep));

module.exports = router;
