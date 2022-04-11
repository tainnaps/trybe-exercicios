require('dotenv').config();
const express = require('express');
const LoginRouter = require('./routes/login');
const UserRouter = require('./routes/user');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/login', LoginRouter);

app.use('/users', UserRouter);

app.listen(PORT, () => console.log('Online'));
