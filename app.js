import express from "express";
import cors from "cors";
import helmet from "helmet";
import { healthCheckHandler, notFoundHandler, posts } from "./routes/index.js";
import figlet from "figlet";
import { PORT, serviceName } from "./config/index.js";
import logger from './logger.js';
import database from "./database/index.js";

const { json, urlencoded } = express;

const app = express();

// // middleware configurations
app.use(cors());
app.use(helmet());
app.use(json());
app.use(urlencoded({extended: false}));

// // routes
app.use('/api/v1/health-check', healthCheckHandler);
app.use('/api/v1/post', posts);

app.use(notFoundHandler);

const banner = figlet.textSync(serviceName, {
  font: 'O8',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  // width: 'full',
  whitespaceBreak: true
});

console.log(banner);

app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});