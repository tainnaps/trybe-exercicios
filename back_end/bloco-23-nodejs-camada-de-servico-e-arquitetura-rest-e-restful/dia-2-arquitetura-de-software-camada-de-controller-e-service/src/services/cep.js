const cepModel = require('../models/cep');

const getCepData = async (cep) => {
  const cepRegex = /\d{5}-?\d{3}/;

  if (!cepRegex.test(cep)) return {
    error: {
      code: 'invalidData',
      message: 'CEP inválido',
    },
  }

  const cepData = await cepModel.getCepData(cep);

  if (!cepData) return {
    error: {
      code: 'notFound',
      message: 'CEP não encontrado',
    },
  }

  return cepData;
};

module.exports = {
  getCepData,
};
