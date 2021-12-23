import { Server } from "@hapi/hapi";
import { PORT } from "../config.js";
export const server = new Server({ port: PORT, host: 'localhost',
    "routes": {
        "cors": true
    } });
