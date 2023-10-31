import { db } from '@database';
import { RouterContract } from '@libs/contracts';
import { DeliverySettingsModel } from '@models';
import express, { Request, Response } from 'express';

export const deliveryRouter = express();
export const deliverySettingRepository = db.getRepository(
  DeliverySettingsModel
);

deliveryRouter.get(
  RouterContract.DELIVERY,
  async (req: Request, res: Response) => {
    // const delivery = await deliverySettingRepository.findOne()
    // ...
  }
);
