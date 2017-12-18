require('dotenv').config();

const express = require('express');
const http = require('http');
const app = express();

const cities = require('./data/cities.json');

const routes = require('./api/v1/routes');

console.dir(inserts);

app.use('/api/v1', routes);

const server = http.Server(app);

server.listen(3000, () => {
    console.info('Server is listening...');
});