const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return { books };
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  if (!book) {
    return {
      error: {
        message: 'Book not found',
      },
    };
  }

  return { book };
}

module.exports = {
  getAll,
  getById,
};
