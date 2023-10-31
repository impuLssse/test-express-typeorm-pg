import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { DeliverySettings } from '@business';

@Entity()
export class DeliverySettingsModel implements DeliverySettings {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  settingName: string;

  @Column()
  settingValue: string;
}
