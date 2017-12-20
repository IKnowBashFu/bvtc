"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.status(200);
    res.send('API Version 1.0!');
});
module.exports = router;
