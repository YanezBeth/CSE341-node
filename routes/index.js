const routes = require('express').Router();

const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.milaRoute);
routes.get('/eliana', lesson1Controller.elianaRoute);
routes.get('/ciara', lesson1Controller.ciaraRoute);
routes.get('/emma', lesson1Controller.emmaRoute);

module.exports = routes;