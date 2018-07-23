const express = require('express');

const routes = express.Router();

const authController = require('./controllers/authController');

routes.get('/', authController.signin);
routes.get('/signup', authController.signup);

module.exports = routes;
