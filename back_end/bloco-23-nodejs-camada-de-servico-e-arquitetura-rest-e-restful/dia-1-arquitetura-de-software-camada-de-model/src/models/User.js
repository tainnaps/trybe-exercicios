const connection = require('./connection');

const serialize = (user) => {
  const { id, first_name, last_name, email, password } = user;

  return {
    id,
    firstName: first_name,
    lastName: last_name,
    email,
    password
  };
}

const create = async (firstName, lastName, email, password) => {
  const [ { insertId } ] = await connection.execute(
    'INSERT INTO Twitter.users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
    [firstName, lastName, email, password],
  );

  return {
    id: insertId,
    firstName,
    lastName,
    email,
  };
};

const getAll = async () => {
  const [ users ] = await connection.execute('SELECT * FROM Twitter.users');
  // console.log(users);
  return users.map((user) => serialize(user));
}

const getById = async (id) => {
  const [ userData ] = await connection.execute('SELECT * FROM Twitter.users WHERE id = ?', [id]);

  if (userData.length === 0) return null;
  // console.log(userData);
  return userData.map((user) => serialize(user))[0];
}

const update = async (id, firstName, lastName, email, password) => {
  const userExists = await getById(id);

  if (!userExists) return null;

  await connection.execute(
    'UPDATE Twitter.users SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?',
    [firstName, lastName, email, password, id],
  );
  // console.log(result);

  return {
    id,
    firstName,
    lastName,
    email,
  };
}

module.exports = {
  create,
  getAll,
  getById,
  update,
};
