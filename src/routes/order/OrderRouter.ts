import express, { Request, Response } from 'express';
import { OrderModel } from '@models';
import { db } from '@database';
import { body, param } from 'express-validator';
import { ValidationMiddleware } from '@libs/middlewares';
import { OrderStatusEnum } from '@models/OrderStatusEnum';
import { Order } from '@business';

export const orderRouter = express();
export const orderRepository = db.getRepository(OrderModel);

/**
 * Create order
 * */
orderRouter.post(
  '/',
  body('productName').isString(),
  body('status').isIn(OrderStatusEnum),
  ValidationMiddleware,
  async (req: Request, res: Response) => {
    const order = new OrderModel({ ...req.body });
    const createdOrder = await orderRepository.save(order);

    return res.json(createdOrder);
  }
);

/**
 * Get order by *orderId*
 * */
orderRouter.get(
  '/:orderId',
  param('orderId').isInt(),
  ValidationMiddleware,
  async (req: Request, res: Response) => {
    const { orderId } = req.params;

    const foundOrder = await orderRepository.findOne({
      where: {
        id: orderId,
      },
    });

    return res.json(foundOrder);
  }
);

/**
 * Get order list
 * */
orderRouter.get('/', async (req: Request, res: Response) => {
  const orders: Order[] = await orderRepository.find({ take: 10 });
  return res.json(orders);
});

/**
 * Update order by *orderId*
 * */
orderRouter.put(
  '/:orderId',
  param('orderId').notEmpty(),
  body('productName').notEmpty(),
  body('status').isIn(OrderStatusEnum),
  ValidationMiddleware,
  async (req: Request, res: Response) => {
    const orderId = req.params.orderId;
    const { productName, status } = req.body;

    const foundProduct = await orderRepository.findOne({
      where: {
        id: orderId,
      },
    });

    try {
      if (!foundProduct) {
        return res.json(null);
      }

      const updatedOrder: Order = await orderRepository.save<OrderModel>({
        id: foundProduct.id,
        createdAt: foundProduct.createdAt,
        productName: productName ?? foundProduct.productName,
        status: status ?? foundProduct.status,
      });

      return res.json(updatedOrder);
    } catch (e) {
      console.error(e);
    }
  }
);
