import { config } from 'dotenv';
config({
    path: '.env'
});
export const PORT = process.env.PORT || '4000';
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const SUPER_USER = process.env.SUPER_USER;
export const POSTGRESS_PORT = process.env.POSTGRESS_PORT ? +process.env.POSTGRESS_PORT : undefined;
