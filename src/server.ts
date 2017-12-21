import * as express from 'express';
import { Server } from 'http';

import { V1Router } from './api/v1';

const app = express();

app.use('/v1', V1Router);

app.use("*", (req, res) => {
    res.status(404);
    res.send('Error 404');
});

const server = new Server(app);

server.listen(3000, () => {
    console.info('Server is listening...');
});