const { User } = require('../models');

const getByUsername = async (username) => {
  const user = await User.findOne({ where: { username } });

  if (!user) {
    return {
      error: {
        message: 'User not found',
      },
    }
  }

  return { user };
};

module.exports = {
  getByUsername,
};
