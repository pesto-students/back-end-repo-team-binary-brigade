const handleErrorResponse = (err, req, res, next) => {
  let statusCode = 500;
  let errorMessage = "Internal Server Error";

  if (err instanceof Error) {
    errorMessage = err.toString();

    switch (err.name) {
      case "ValidationError":
      case "SyntaxError":
        statusCode = 400;
        break;
      case "CastError":
        statusCode = 404;
        break;
    }
  }

  return res.status(statusCode).json({ error: errorMessage });
};
export default handleErrorResponse;
