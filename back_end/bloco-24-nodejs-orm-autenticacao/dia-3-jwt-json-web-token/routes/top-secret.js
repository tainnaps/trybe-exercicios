const express = require('express');
const { validateToken } = require('../middlewares/auth');
const AdminControllers = require('../controllers/admin');

const router = express.Router();

router.get(
  '/',
  validateToken,
  AdminControllers.getSecretInfo,
);

module.exports = router;
