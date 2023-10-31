import { getDurationInMilliseconds } from '@libs/utils';
import { NextFunction, Request, Response } from 'express';
import { hrtime } from 'process';

export const CheckDurationRequestMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const start = hrtime();

  /**
   * The 'end' event is emitted when there is no more data to be consumed from the stream.
   * @link https://clck.ru/36J4LY
   */
  res.on('close', () => {
    const durationInMilliseconds = getDurationInMilliseconds(start);

    console.log(
      `${req.method} ${
        req.originalUrl
      } - ${durationInMilliseconds.toLocaleString()} ms`
    );
  });

  next();
};
