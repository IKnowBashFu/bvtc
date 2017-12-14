const router = require('express').Router();

router.get('/', (req, res) => {
    res.status = 200;
    res.send('Hello, World!');
});

router.get('/hello/:name/:lname?', (req, res) => {
    res.status = 200;
    if (!req.params.lname)
        res.send(`Hello, ${req.params.name}!`);
    else
        res.send(`Hello, ${req.params.name} ${req.params.lname}!`);
});

module.exports = router;