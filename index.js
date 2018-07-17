const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
})

app.set('view engine', 'njk');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index')
})

app.post('auth', (req, res) => {
    console.log(req.body);
    res.send(`Você logou com o usuário ${req.body.username}`);

})


app.listen(3000);