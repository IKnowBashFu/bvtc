"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const User = require('../../../models/user');
exports.UsersRouter = express.Router();
exports.UsersRouter.use(bodyParser.json());
exports.UsersRouter.get('/', (req, res) => {
    res.status(200);
    res.send('Users!');
});
exports.UsersRouter.post('/', (req, res) => {
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
    res.send({ message: 'Hello!' });
});
