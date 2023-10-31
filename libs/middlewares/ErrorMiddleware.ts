import { NextFunction, Request, Response } from 'express';
import { ApiError } from './ValidationMiddleware';

export const ErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res.json({
      statusCode: 400,
      message: 'BAD_REQUEST',
      errors: err.errors,
    });
  }
  return next();
};
