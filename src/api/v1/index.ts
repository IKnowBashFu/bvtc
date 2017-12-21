import * as express from 'express';

import { UsersRouter } from './users';

export const V1Router = express.Router();

V1Router.use('/users', UsersRouter);

V1Router.get('/', (req, res) => {
    res.status(200);
    res.send('API Version 1.0!');
});