import Joi from '@hapi/joi';
import { AppConfig } from '@libs/interfaces';
import { config } from 'dotenv';

const typeEnv =
  process.env.NODE_ENV == 'dev'
    ? 'dev'
    : process.env.NODE_ENV == 'prod'
    ? 'prod'
    : null;

if (!typeEnv) {
  throw new Error('Окружение не распознано');
}

config({ path: `.env.${typeEnv}` });

const envs = Joi.object<AppConfig>().keys({
  APP_PORT: Joi.number().default(3000),
  DB_PORT: Joi.number().default(5432),
  DB_HOST: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_USER: Joi.string().required(),
});

const appConfig = envs.validate(process.env, { allowUnknown: true });

if (appConfig.error?.details.length) {
  console.error(appConfig.error?.details);
  throw new Error(`Config validation error`);
}

export default appConfig.value as AppConfig;
