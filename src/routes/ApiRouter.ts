import { RouterContract } from '@libs/contracts';
import { Router } from 'express';
import { deliveryRouter } from './delivery';
import { orderRouter } from './order';

export const apiRouter = Router();

apiRouter.use(RouterContract.DELIVERY, deliveryRouter);
apiRouter.use(RouterContract.ORDER, orderRouter);
