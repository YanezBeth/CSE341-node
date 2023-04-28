const express = require('express');
const app = express();

const port = 8080;

app.use('/', require('./routes'));

app.listen(process.env.port || port);
console.log('Web server is listening at port ' + (process.env.port || port));