const express = require('express');
const LoginMiddlewares = require('../middlewares/login');
const LoginControllers = require('../controllers/login');

const router = express.Router();

router.post(
  '/',
  LoginMiddlewares.validateCredentials,
  LoginControllers.login,  
);

module.exports = router;
