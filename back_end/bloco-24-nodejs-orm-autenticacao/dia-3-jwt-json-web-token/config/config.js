require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  // test: {
  //   username: root,
  //   password: null,
  //   database: database_test,
  //   host: 127.0.0.1,
  //   dialect: mysql
  // },
  // production: {
  //   username: root,
  //   password: null,
  //   database: database_production,
  //   host: 127.0.0.1,
  //   dialect: mysql
  // }
};
