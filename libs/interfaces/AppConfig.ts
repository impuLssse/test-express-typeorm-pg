export interface AppConfig {
  DB_PORT: number;
  DB_HOST: string;
  DB_PASS: string;
  DB_USER: string;
  APP_PORT: number;
  LOG_LEVEL: string;
  NODE_ENV: 'prod' | 'dev';
}
