import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import db from './config/database';
import { routerConfigs } from './routes/routes';

const PORT = process.env.PORT || 1337;
const welcome = process.env.WELCOME_MESSAGE || 'Welcome to Rango!';
const api = express();

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(`Failed to connect to database.\nError:\n${err}`));

api.use(helmet());
api.use(cors());
api.use(morgan('tiny'));
api.use(express.json());

for(const { key, router } of routerConfigs)
  api.use(key, router);

api.listen(PORT, () =>
{
  console.log(`Rango has started on port ${PORT}.`)
});
