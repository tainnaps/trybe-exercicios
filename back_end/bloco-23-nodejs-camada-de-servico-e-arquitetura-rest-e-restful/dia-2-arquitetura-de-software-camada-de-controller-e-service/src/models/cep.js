const connection = require('./connection');

const removeCepHyphen = (cep) => {
  if (cep.includes('-'))
    return cep.replace('-', '');

  return cep;
};

const formatCepDataToView = ({ cep, logradouro, bairro, localidade, uf }) => {
  const cepWithHyphen = cep.slice(0, 5).concat('-', cep.slice(5));

  return {
    cep: cepWithHyphen,
    logradouro,
    bairro,
    localidade,
    uf,
  };
};

const getCepData = async (cep) => {
  const cepWithoutHyphen = removeCepHyphen(cep);
  const query = 'SELECT * FROM ceps WHERE cep = ?';
  const [ [ cepData ] ] = await connection.execute(query, [cepWithoutHyphen]);

  if (!cepData) return null;

  return formatCepDataToView(cepData);
};

module.exports = {
  getCepData,
};
