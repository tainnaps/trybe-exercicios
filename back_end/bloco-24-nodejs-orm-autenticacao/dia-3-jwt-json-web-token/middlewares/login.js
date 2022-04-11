const joi = require('joi');

const credentialsSchema = joi.object({
  username: joi.string().alphanum().min(5).required(),
  password: joi.string().min(5).required(),
});

const validateCredentials = (req, res, next) => {
  const { username, password } = req.body;

  const { error } = credentialsSchema.validate({ username, password });

  if (error) {
    const message = error.details[0].message;

    return res.status(400).json({ message });
  }

  next();
};

module.exports = {
  validateCredentials,
};
