import * as express from 'express';
import { Server } from 'http';
import * as mongoose from 'mongoose';

import { V1Router } from './api/v1';

(mongoose as any).Promise = global.Promise;

if (process.env.DB_SECURED === 'true') {
	mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}` +
	`@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
		useMongoClient: true
	});
} else {
	mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
	useMongoClient: true
});
}

const app = express();

app.use('/v1', V1Router);

app.use('*', (req, res) => {
	res.status(404);
	res.send('Error 404');
});

const server = new Server(app);

server.listen(3000, () => {
	console.info('Server is listening...');
});