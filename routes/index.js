/* LESSON 1
const routes = require('express').Router();

const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.milaRoute);
routes.get('/eliana', lesson1Controller.elianaRoute);
routes.get('/ciara', lesson1Controller.ciaraRoute);
routes.get('/emma', lesson1Controller.emmaRoute);

module.exports = routes;
*/

/* LESSON 2 */
const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'));

module.exports = router;
