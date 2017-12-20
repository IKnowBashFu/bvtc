"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require("express");
const http_1 = require("http");
const app = express();
const cities = require('./data/cities.json');
const routes = require('./api/v1/routes');
app.use('/api/v1', routes);
const server = new http_1.Server(app);
server.listen(3000, () => {
    console.info('Server is listening...');
});
