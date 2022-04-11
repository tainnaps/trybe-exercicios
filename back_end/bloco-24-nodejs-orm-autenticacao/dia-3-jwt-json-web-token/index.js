require('dotenv').config();
const express = require('express');
const LoginRouter = require('./routes/login');
const UserRouter = require('./routes/user');
const SecretRouter = require('./routes/top-secret');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/login', LoginRouter);

app.use('/users', UserRouter);

app.use('/top-secret', SecretRouter);

app.listen(PORT, () => console.log('Online'));
