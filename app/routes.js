const express = require('express');

const routes = express.Router();

const authController = require('./controllers/authController');

routes.get('/', authController.signin);
routes.get('/signup', authController.signup);

routes.post('/register', authController.register);

module.exports = routes;
