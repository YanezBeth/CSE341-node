// express 
const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1Route');

app.get('/', lesson1Controller.lesson1Route);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web server is listening at port ' + (process.env.port || port));