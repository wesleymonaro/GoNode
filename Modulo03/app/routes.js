const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');

const controllers = requireDir('./controllers');

// Auth
routes.post('/signup', controllers.authController.signup);
routes.post('/signin', controllers.authController.signin);


// WITH AUTH
routes.use(authMiddleware);

// USERS
routes.put('/users', controllers.userController.update);

// FOLLOW
routes.post('/follow/:id', controllers.followController.create);
routes.delete('/unfollow/:id', controllers.followController.destroy);

// Tweets
routes.post('/tweets', controllers.tweetController.create);
routes.delete('/tweets/:id', controllers.tweetController.destroy);

// LIKE
routes.post('/like/:id', controllers.likeController.toggle);

module.exports = routes;
