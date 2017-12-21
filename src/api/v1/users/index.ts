import * as express from 'express';
import * as bodyParser from 'body-parser';

const User = require('../../../models/user');

export const UsersRouter = express.Router();

UsersRouter.use(bodyParser.json());

UsersRouter.get('/', (req, res) => {
    res.status(200);
    res.send('Users!');
});

UsersRouter.post('/', (req, res) => {
    console.dir(req.body);

    User().create({
        firstName: 'Chris',
        lastName: 'Vollink',
        username: 'blergh',
        email: 'me@chrisvollink.com'
    }).then((user) => {
        console.dir(`User returned: ${user}`);
    });

    res.status(200);
    res.send({message: 'Hello!'});
});