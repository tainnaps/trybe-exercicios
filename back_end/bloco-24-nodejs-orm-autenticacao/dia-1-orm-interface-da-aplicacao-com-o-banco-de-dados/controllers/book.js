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
    const { id } = req.params;

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

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    
    const { book } = await BookService.create({ title, author, pageQuantity });

    res.status(201).json(book);
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message:  'Algo deu errado' });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    
    const { error } = await BookService.update({ id, title, author, pageQuantity });

    if (error) {
      const { message } = error;
      return res.status(404).json({ message });
    }

    res.status(200).json({ message: 'Book successfully updated' });
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message:  'Algo deu errado' });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const { error } = await BookService.deleteById(id);

    if (error) {
      const { message } = error;
      return res.status(404).json({ message });
    }

    res.status(200).end();
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message:  'Algo deu errado' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
