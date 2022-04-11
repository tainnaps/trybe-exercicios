require('dotenv').config();
const express = require('express');
const pingRouter = require('./routes/ping');
const cepRouter = require('./routes/cep');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use('/ping', pingRouter);

app.use('/cep', cepRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Online on PORT ${PORT}`));
