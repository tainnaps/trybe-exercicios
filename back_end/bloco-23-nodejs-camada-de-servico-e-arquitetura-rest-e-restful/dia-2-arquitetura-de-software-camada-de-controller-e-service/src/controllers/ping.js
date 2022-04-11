const getPong = (_req, res) => {
  return res.status(200).json({ message: 'pong!' });
};

module.exports = {
  getPong,
};
