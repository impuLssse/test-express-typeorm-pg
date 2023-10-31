import { OrderStatus } from '@libs/types';

/**
 * Параметры для доставки
 */
export interface Order {
  id: string;
  productName: string;
  createdAt: Date;
  status: OrderStatus;
}
