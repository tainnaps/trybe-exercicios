const BookService = require('../services/book');

const getAll = async (req, res) => {
  try {
    const { books } = await BookService.getAll();

    res.status(200).json(books);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message:  'Algo deu errado' });
  }
};

const getById = async (req, res) => {
  try {
    const { params } = req;
    const id = parseInt(params.id, 10);

    const { book, error } = await BookService.getById(id);

    if (error) {
      const { message } = error;
      return res.status(404).json({ message });
    }

    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message:  'Algo deu errado' });
  }
};

module.exports = {
  getAll,
  getById,
};
