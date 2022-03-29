const statusByErrorCode = {
  invalidData: 400,
  notFound: 404,
  alreadyExists: 409,
};

const errorMiddleware = (error, _req, res, _next) => {
  if (error.isJoi) {
    return res.status(400).json({error: {code: invalidData, message: error.message}});
  }

  if (error.code) {
    const statusCode = statusByErrorCode[error.code];

    return res.status(statusCode).json(error);
  }

  console.log(error);
  return res.status(500).json({error: {code: 'internalError', message: 'Internal server error'}});
}

module.exports = errorMiddleware;
