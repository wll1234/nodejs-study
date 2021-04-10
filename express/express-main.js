const express = require('express'); // npm install express
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello express!');
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});

/*
curl -X GET "127.0.0.1:3000"
- result -
hello express!
*/