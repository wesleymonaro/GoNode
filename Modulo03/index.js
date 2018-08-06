require('dotenv').config();

const app = require('express')();
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');
const Raven = require('./app/services/sentry');

const dbConfig = require('./config/database');

mongoose.connect(dbConfig.url);
requireDir(dbConfig.modelsPath);

app.use(bodyParser.json());

app.use(Raven.requestHandler());

app.use('/api', require('./app/routes'));

app.use(Raven.errorHandler());

app.listen(3000);
