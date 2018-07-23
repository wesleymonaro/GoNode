const express = require('express');

const routes = express.Router();

const userController = require('./controllers/userController');

routes.get('/', userController.index);

module.exports = routes;
