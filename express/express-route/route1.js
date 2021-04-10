const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('route to route1.js');
});

module.exports = router;