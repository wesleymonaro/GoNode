const app = require('express')();
const mongoose = require('mongoose');

const dbConfig = require('./config/database');

mongoose.connect(dbConfig.url);

app.listen(3000);
