import { config } from 'dotenv';
import * as path from 'path';
const __dirname = path.dirname(process.argv[1]);
config({
    path: path.join(__dirname, '../../.env')
});
export const PORT = process.env.PORT || '4000';
