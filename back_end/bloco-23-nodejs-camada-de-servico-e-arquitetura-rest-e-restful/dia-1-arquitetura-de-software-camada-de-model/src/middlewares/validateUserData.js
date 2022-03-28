const validateUserData = (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;
  const emailRegex = /\w+\@\w+\.com$/;

  if (!first_name || typeof first_name !== 'string')
    return res.status(400).json({
      error: true,
      message: 'O campo firstName é obrigatório',
    });

  if (!last_name || typeof last_name !== 'string')
    return res.status(400).json({
      error: true,
      message: 'O campo lastName é obrigatório',
    });

  if (!email || typeof email !== 'string' || !emailRegex.test(email))
    return res.status(400).json({
      error: true,
      message: 'O campo email deve ter o formato x@x.com',
    });

  if (!password || typeof password !== 'string' || password.length < 6)
    return res.status(400).json({
      error: true,
      message: 'O campo password deve ter pelo menos 6 caracteres',
    });

  next();
}

module.exports = validateUserData;
