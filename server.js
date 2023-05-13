// CODE IS NOT MINE. Used Brother Birch's code as a reference to help me understand how to use MongoDB with Node.js
// https://github.com/byui-cse/cse341-code-student/blob/L02-personal-solution/app.js

const express = require('express');
//const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');
//const routes = require('./routes');
const port = process.env.PORT || 8080;
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');



app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)) //must be first 
  .use(cors())
  .use(bodyParser.json())
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  //.use('/', routes);
  .use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
