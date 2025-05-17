export const errorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV === 'dev') console.error(err.stack);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    message: err.message,
    stack:
      process.env.NODE_ENV === 'production'
        ? 'something wrong happen'
        : err.stack,
  });
};
