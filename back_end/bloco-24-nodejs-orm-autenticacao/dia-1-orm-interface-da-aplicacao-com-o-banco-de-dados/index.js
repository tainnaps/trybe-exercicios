require('dotenv').config();
const express = require('express');
const BookController = require('./controllers/book');
const BookMiddleware = require('./middlewares/book');

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get('/books', BookController.getAll);

app.get('/books/:id', BookController.getById);

app.post('/books', BookMiddleware.validateValues, BookController.create);

app.post('/books/:id', BookMiddleware.validateValues, BookController.update);

app.delete('/books/:id', BookController.deleteById);

app.listen(PORT, () => console.log('Online'));
