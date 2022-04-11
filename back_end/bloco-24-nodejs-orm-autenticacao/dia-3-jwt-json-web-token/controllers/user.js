const getUser = (req, res) => {
  try {
    const { username, admin } = req.user;

    return res.status(200).json({ username, admin });
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getUser,
}
