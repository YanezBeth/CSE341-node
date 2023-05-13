// https://www.npmjs.com/package/swagger-autogen
//Usage (Basic): The code below must be inserted in a separate file (e.g swagger.js):

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  //host: 'localhost:8080',
  //schemes: ['http'],
  host: 'https://yanezcse341.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);