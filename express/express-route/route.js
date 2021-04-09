const express = require('express'); // npm install express
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});


const indexRouter = require('./index');
const testRouter = require('./test');
 
app.use('/', indexRouter);
app.use('/test', testRouter);

/*
curl -X GET "127.0.0.1:3000"
curl -X GET "127.0.0.1:3000/test"
- result -
route index.js
route test.js
*/