import { config } from 'dotenv';

config({
  path: '.env',
});

export const PORT: string = process.env.PORT || '4000';
export const USE_FASTIFY: string = process.env.USE_FASTIFY || "express" ;
export const LEVEL: string = process.env.LEVEL || '4';
export const POSTGRES_HOST: string = process.env.POSTGRES_HOST || 'postgres';
export const POSTGRES_PASSWORD:string = process.env.POSTGRES_PASSWORD || '7081379';
export const SUPER_USER:string = process.env.SUPER_USER || 'nikita3';
export const POSTGRESS_PORT:number = process.env.POSTGRESS_PORT ? +process.env.POSTGRESS_PORT
  : 5432;
export const DB:string = process.env.DB || 'task23apsql';
export const JWT_SECRET_KEY:string = process.env.JWT_SECRET_KEY || 'secret-key';
