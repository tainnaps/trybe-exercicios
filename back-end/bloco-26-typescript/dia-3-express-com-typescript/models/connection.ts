import mysql from 'mysql2/promise';
import 'dotenv/config';

export default mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});
