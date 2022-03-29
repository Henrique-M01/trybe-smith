import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err.details) {
    const [error] = err.details;
    const { message, type } = error;

    if (type === 'any.required') return res.status(400).json({ error: message });

    return res.status(422).json({ error: message });
  }

  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.status });
};

export default errorHandler;
