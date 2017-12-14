require('dotenv').config();

const express = require('express');
const http = require('http');
const app = express();

const routes = require('./api/v1/routes');

const database = require('./database');

database.testDB();

app.use('/api/v1', routes);

const server = http.Server(app);

server.listen(3000, () => {
    console.info('Server is listening...');
});