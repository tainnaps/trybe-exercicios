import express from 'express';
import 'dotenv/config';
import 'express-async-errors';

const app = express();

app.use(express.json());

const PORT: number | string = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Online on port ${PORT}`));
