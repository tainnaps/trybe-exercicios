const statusByErrorCode = {
  invalidData: 400,
  notFound: 404, 
};

const errorMiddleware = (error, _req, res, _next) => {
  if (error.code) {
    const statusCode = statusByErrorCode[error.code];

    return res.status(statusCode).json(error);
  }

  console.log(error);
  return res.status(500).json({error: {code: 'internalError', message: 'Internal server error'}});
}

module.exports = errorMiddleware;
