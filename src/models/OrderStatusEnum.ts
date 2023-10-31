import { OrderStatus } from '@libs/types/OrderStatusEnum';

export const OrderStatusEnum: OrderStatus[] = [
  'new',
  'packed',
  'processing',
  'delivered',
  'return',
];
