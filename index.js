const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.set('view engine', 'njk');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { nomes: ['Wesley', 'Sheila', 'Andrey'] })
})


app.listen(3000);