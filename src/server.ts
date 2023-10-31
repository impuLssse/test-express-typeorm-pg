import appConfig from './config';
import express from 'express';
import { db } from '@database';
import { RouterContract } from '@libs/contracts';
import { apiRouter } from '@routes/ApiRouter';
import {
  CheckDurationRequestMiddleware,
  ErrorMiddleware,
} from '@libs/middlewares';

const bootstrapApp = async () => {
  try {
    // Create Express app
    const app = express();

    await db.initialize();
    console.info('Database connected');

    app.use(express.json());
    app.use(RouterContract.BASE_URL, apiRouter);
    app.use(ErrorMiddleware, CheckDurationRequestMiddleware);

    app.listen(appConfig.APP_PORT, () => {
      console.info(
        `Server is running on port 3000 with prefix ${RouterContract.BASE_URL}`
      );
    });
  } catch (e) {
    console.error('Error database initialization: ', e);
    process.exit(1);
  }
};
bootstrapApp();
