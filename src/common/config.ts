import { config } from 'dotenv';

config({ path: '../../.env' });
export const PORT: string|undefined = process.env.PORT || '4000';
