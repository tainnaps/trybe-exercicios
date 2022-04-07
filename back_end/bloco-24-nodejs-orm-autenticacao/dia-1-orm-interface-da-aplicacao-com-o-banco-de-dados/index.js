require('dotenv').config();
const express = require('express');
const BookController = require('./controllers/book');

const app = express();

const PORT = process.env.PORT;

app.get('/books', BookController.getAll);

app.get('/books/:id', BookController.getById);

app.listen(PORT, () => console.log('Online'));
