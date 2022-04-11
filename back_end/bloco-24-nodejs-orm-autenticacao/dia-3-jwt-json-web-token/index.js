require('dotenv').config();
const express = require('express');
const LoginRouter = require('./routes/login');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/login', LoginRouter);

app.listen(PORT, () => console.log('Online'));
