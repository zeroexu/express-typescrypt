import dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../../../.env` });

export const SETTINGS = {
  PORT: process.env.PORT,
  APP_NAME: process.env.APP_NAME,
  NODE_ENV: process.env.NODE_ENV,
  MAINTENANCE: process.env.MAINTENANCE,
  WHITELIST: process.env.ALLOWED_DOMAINS ? process.env.ALLOWED_DOMAINS.split(",") : [],
};
export const EXTERNAL_KEYS = {
  AMAZON: {
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  },
};
export const APP_KEYS = {
  PORT: "port",
  ENV: "env",
  APP_NAME: "app_name",
  ENVIROMENT_TEST: "test",
  ENVIROMENT_DEV: "development",
  ENVIROMENT_PROD: "production",
};
export const ERROR_MESSAGES = {
  APP_ERROR: "Error in Application",
  NOT_FOUND: "Not Found",
};
