require('dotenv').config();
const express = require('express');
const pingRouter = require('./routes/ping');

const app = express();

app.use('/ping', pingRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Online on PORT ${PORT}`));
