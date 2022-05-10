const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'Twitter',
  password: 'secret',
});

module.exports = connection;
