const connection = require('./connection');

const removeCepHyphen = (cep) => {
  if (cep.includes('-'))
    return cep.replace('-', '');

  return cep;
};

const formatCepDataToView = (cep, logradouro, bairro, localidade, uf) => {
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

  const { cep: cepNumber, logradouro, bairro, localidade, uf } = cepData;

  return formatCepDataToView(cepNumber, logradouro, bairro, localidade, uf);
};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const cepWithoutHyphen = removeCepHyphen(cep);
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  const params = [cepWithoutHyphen, logradouro, bairro, localidade, uf]
  const [ { insertId: insertCep } ] = await connection.execute(query, params);

  return formatCepDataToView(insertCep, logradouro, bairro, localidade, uf);
}

module.exports = {
  getCepData,
  createCep,
};
