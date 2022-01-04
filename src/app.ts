import {Server} from "@hapi/hapi";
import { PORT } from "../config.js"


export const server: Server = new Server({port: PORT, host: '0.0.0.0',
  "routes": {
    "cors": true
  }});
