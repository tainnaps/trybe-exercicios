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

const create = async ({ title, author, pageQuantity }) => {
  const createdBook = await Book.create({ title, author, pageQuantity });

  return { book: createdBook };
};

const update = async ({ id, title, author, pageQuantity }) => {
  // updatedBook equals the number of updated rows
  const [wasBookUpdated] = await Book.update(
    { title, author, pageQuantity },
    { where: { id } },
  );

  if (!wasBookUpdated) {
    return {
      error: {
        message: 'Book not found',
      },
    };
  }

  return {};
};

const deleteById = async (id) => {
  const wasBookDeleted = await Book.destroy({ where: { id } });

  if (!wasBookDeleted) {
    return {
      error: {
        message: 'Book not found',
      },
    };
  }

  return {};
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
