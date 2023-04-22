const routes = require('express').Router();

const lesson1Controller = require('../controllers/lesson1Route');
routes.get('/', lesson1Controller.lesson1Route);

module.exports = routes;