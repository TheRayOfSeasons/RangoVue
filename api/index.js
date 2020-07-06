import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const port = process.env.PORT;
const welcome = process.env.WELCOME_MESSAGE
const api = express();

api.use(helmet());
api.use(cors());
api.use(morgan('tiny'));
api.use(express.json());

api.get('/', (req, res) =>
{
    const message = {message: welcome || 'Welcome to Rango!'};
    res.send(message);
});

api.listen(port || 1337, () => console.log('Rango has started.'))
