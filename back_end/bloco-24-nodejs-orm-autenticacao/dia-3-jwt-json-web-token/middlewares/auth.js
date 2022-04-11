const jwt = require('jsonwebtoken');
const UserServices = require('../services/user');
const SECRET = process.env.SECRET;

const validateToken = async (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) {
    return res.status(401).json({ error: { message: 'Token not found' } });
  }

  try {
    const { payload } = jwt.verify(token, SECRET);

    const { error } = await UserServices.getByUsername(payload.username);

    if (error) {
      return res.status(404).json({ message: error.message });
    }

    req.user = payload;

    next();
  } catch (error) {
    return res.status(401).json({ error: { message: error.message } });
  }
}

module.exports = {
  validateToken,
};
