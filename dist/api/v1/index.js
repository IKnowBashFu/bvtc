"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const users_1 = require("./users");
exports.V1Router = express.Router();
exports.V1Router.use('/users', users_1.UsersRouter);
exports.V1Router.get('/', (req, res) => {
    res.status(200);
    res.send('API Version 1.0!');
});
