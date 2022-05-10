const { json } = require('express');
const express = require('express');
const User = require('./models/User');
const { validateUserData } = require('./middlewares');

const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/user', validateUserData, async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    const user = await User.create(first_name, last_name, email, password);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error'});
  }
});

app.get('/user', async (_req, res) => {
  try {
    const users = await User.getAll();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error'});
  }
});

app.get('/user/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.getById(+id);

    if (!user) {
      return res.status(404),json({
        error: true,
        message: 'Usuário não encontrado',
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error'});
  }
});

app.put('/user/:id', validateUserData, async (req, res) => {
    try {
    const { id } = req.params;
    const { first_name, last_name, email, password } = req.body;

    const updatedUser = await User.update(id, first_name, last_name, email, password);

    if (!updatedUser) {
      return res.status(404),json({
        error: true,
        message: 'Usuário não encontrado',
      });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error'});
  }
});

app.listen(PORT, () => console.log('Online'));
