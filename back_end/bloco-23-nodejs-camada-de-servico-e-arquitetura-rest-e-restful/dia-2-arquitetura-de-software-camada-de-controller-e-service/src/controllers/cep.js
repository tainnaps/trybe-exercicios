const cepService = require('../services/cep');

const getCepData = async (req, res, next) => {
  const { cep } = req.params;

  const cepData = await cepService.getCepData(cep);

  if (cepData.error) {
    return next(cepData.error);
  }

  return res.status(200).json(cepData);
};

module.exports = {
  getCepData,
};
