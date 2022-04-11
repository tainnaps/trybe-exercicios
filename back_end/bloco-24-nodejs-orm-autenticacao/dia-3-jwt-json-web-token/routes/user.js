const express = require('express');
const { validateToken } = require('../middlewares/auth');
const UserControllers = require('../controllers/user');

const router = express.Router();

router.get(
  '/me',
  validateToken,
  UserControllers.getUser,
);

module.exports = router;
