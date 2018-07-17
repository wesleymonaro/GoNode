const express = require('express');
const app = express();

//middleware global
// app.use((req, res, next) => {
//     console.log('Acessou');
//     next();
// })

//custom middleware
const userMiddleware = (req, res, next) => {
    console.log('Acessou');
    next();
}

app.get('/', (req, res, next) => {
    res.send('Hello World');
    next(); //chama o próximo middleware/rota
})

app.get('/teste', (req, res) => {
    res.send('Hello World');
})

app.get('/user', userMiddleware, (req, res) => {
    res.send('Usuário Wesley');
})

app.listen(3000);