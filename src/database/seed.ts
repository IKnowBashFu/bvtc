import { config } from 'dotenv';
import * as mongoose from 'mongoose';
import City from './models/city';

config();

const cities  = require('../data/cities.json');

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

console.log('Beginning seed...');

for (let country in cities) {
	for (let state in cities[country]) {
		cities[country][state].forEach((city) => {
			let cityDoc = new City({
				name: city,
				state,
				country
			});

			cityDoc.save((err) => {
				if (err) {
					console.error(err);
					process.exit(1);
				}
			});
		});
	}
}

console.info('Seeding complete!');

mongoose.connection.close();