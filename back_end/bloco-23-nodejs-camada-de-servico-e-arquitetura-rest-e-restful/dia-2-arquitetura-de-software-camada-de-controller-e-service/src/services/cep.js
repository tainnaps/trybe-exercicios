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

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const existingCep = await cepModel.getCepData(cep);

  if (existingCep) return {
    error: {
      code: 'alreadyExists',
      message: 'CEP já existente',
    },
  };

  const createdCep = await cepModel.createCep(cep, logradouro, bairro, localidade, uf);

  return createdCep;
};

module.exports = {
  getCepData,
  createCep,
};
