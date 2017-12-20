require('dotenv').config();

import * as express from 'express';
import { Server } from 'http';
const app = express();

const cities = require('./data/cities.json');

const routes = require('./api/v1/routes');

app.use('/api/v1', routes);

const server = new Server(app);

server.listen(3000, () => {
    console.info('Server is listening...');
});