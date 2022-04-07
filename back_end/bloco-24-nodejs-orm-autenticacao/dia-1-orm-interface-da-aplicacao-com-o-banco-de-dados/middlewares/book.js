const joi = require('joi');

const validateValues = (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
  
    const { error: joiError } = joi.object({
      title: joi.string().required(),
      author: joi.string().required(),
      pageQuantity: joi.number().integer().min(1),
    }).validate({ title, author, pageQuantity });
  
    if (joiError) {
      return res.status(422).json({ message: joiError.details[0].message });
    }
  
    next();
  } catch (err) {
    console.log(err.message);

    res.status(500).json({ message:  'Algo deu errado' });
  }
};

module.exports = {
  validateValues,
};
