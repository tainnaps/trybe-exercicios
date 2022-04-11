const UserServices = require('../services/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const { user, error } = await UserServices.getByUsername(username);

    if (error) {
      return res.status(404).json({ message: error.message });
    }

    if (password !== user.password) {
      return res.status(400).json({ message: 'Wrong password' });
    }

    const payload = {
      username,
      admin: username === 'admin' && password === 's3nh4S3gur4???',
    };

    const token = jwt.sign({ payload }, SECRET, { expiresIn: '1h' });

    res.status(200).json({ token })
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  login,
}
