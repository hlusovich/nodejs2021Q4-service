import { config } from 'dotenv';
config({
    path: '.env'
});
export const PORT = process.env.PORT || '4000';
