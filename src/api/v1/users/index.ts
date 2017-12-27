import * as bcrypt from 'bcrypt';
import * as bodyParser from 'body-parser';
import * as express from 'express';

import User from '../../../database/models/user';

export const UsersRouter = express.Router();

UsersRouter.use(bodyParser.json());

UsersRouter.get('/', (req, res) => {
	res.status(200);
	res.send('Users!');
});

UsersRouter.post('/', (req, res) => {
	const body = req.body;

	if (body.username !== undefined && body.password !== undefined && body.email !== undefined) {
		const user = new User({
			email: body.email,
			password: bcrypt.hashSync(body.password, 10),
			username: body.username
		});

		user.save();
	}

	res.status(200);
	res.send({message: 'Hello!'});
});