import { Order } from '@business';
import { OrderStatus } from '@libs/types';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class OrderModel implements Order {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  productName: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  status: OrderStatus;

  constructor(order: OrderModel) {
    Object.assign(this, { ...order });
  }
}
