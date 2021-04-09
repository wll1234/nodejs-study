const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello express!');
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});