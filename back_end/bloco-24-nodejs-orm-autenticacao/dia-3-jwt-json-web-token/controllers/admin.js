const getSecretInfo = (req, res) => {
  try {
    res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getSecretInfo,
}
