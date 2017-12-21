"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = require("http");
const v1_1 = require("./api/v1");
const app = express();
app.use('/v1', v1_1.V1Router);
app.use("*", (req, res) => {
    res.status(404);
    res.send('Error 404');
});
const server = new http_1.Server(app);
server.listen(3000, () => {
    console.info('Server is listening...');
});
