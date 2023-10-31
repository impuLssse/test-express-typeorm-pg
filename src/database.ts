import { DataSource } from 'typeorm';

export const db = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'hotline',
  password: 'devpass',
  database: 'test',
  entities: [__dirname + '/models/*.ts'],
  logging: ['query'],
  synchronize: !!(process.env.NODE_ENV == 'dev'),
});
