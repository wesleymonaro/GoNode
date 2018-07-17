const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('Hello World');
    next(); //chama o próximo middleware/rota
})

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3000);