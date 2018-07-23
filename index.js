const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./app/routes');

const app = express();

app.use(express.static(path.resolve('app', 'public')));

nunjucks.configure(path.resolve('app', 'views'), {
  autoescape: true,
  express: app,
});

app.set('view engine', 'njk');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000);
