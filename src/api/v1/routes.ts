import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.status(200);
    res.send('API Version 1.0!');
});

module.exports = router;