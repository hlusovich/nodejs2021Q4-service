import { config } from 'dotenv';

config({
    path: '.env'
});
export const PORT: string = process.env.PORT || '4000';
export  const POSTGRES_PASSWORD:string|undefined = process.env.POSTGRES_PASSWORD;
export  const SUPER_USER:string|undefined = process.env.SUPER_USER;
export  const POSTGRESS_PORT:number|undefined = process.env.POSTGRESS_PORT?+process.env.POSTGRESS_PORT:undefined;
