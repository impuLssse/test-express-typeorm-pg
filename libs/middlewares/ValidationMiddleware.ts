import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

export class ApiError extends Error {
  constructor(private status: number, code: string, public errors?: object[]) {
    super(code);
  }

  static badRequest(errors: object[]) {
    return new ApiError(500, 'BAD_REQUEST', errors);
  }

  static notFound() {
    return new ApiError(404, 'NOT_FOUND');
  }
}

export const ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const checkResult = validationResult(req);

  if (!checkResult.isEmpty()) {
    throw ApiError.badRequest(checkResult.array());
  }
  return next();
};
