const Joi = require('joi');
const cepService = require('../services/cep');

const getCepData = async (req, res, next) => {
  const { cep } = req.params;

  const cepData = await cepService.getCepData(cep);

  if (cepData.error) return next(cepData.error);

  return res.status(200).json(cepData);
};

const createCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error: joiError } = Joi.object({
    cep: Joi.string().not().empty().required().pattern(/\d{5}-\d{3}/),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  })
    .validate({ cep, logradouro, bairro, localidade, uf });

  if (joiError) return next(joiError);

  const createdCep = await cepService.createCep(cep, logradouro, bairro, localidade, uf);

  if (createdCep.error) return next(createdCep.error);

  return res.status(201).json(createdCep);
};

module.exports = {
  getCepData,
  createCep,
};
