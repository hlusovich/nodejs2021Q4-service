import { config } from 'dotenv';

config({
  path: '.env',
});
export const PORT: string = process.env.PORT || '4000';
export const POSTGRES_PASSWORD:string = process.env.POSTGRES_PASSWORD || '7081379';
export const SUPER_USER:string = process.env.SUPER_USER || 'nikita3';
export const POSTGRESS_PORT:number = process.env.POSTGRESS_PORT ? +process.env.POSTGRESS_PORT
  : 5432;
export const DB:string = process.env.DB || 'task8psql';
