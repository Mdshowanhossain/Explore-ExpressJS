const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.status(200);
    res.send('Welcome to Home Page');
    res.end();
})

app.get('/header', (req, res) => {
    res.status(200);
    const firsHeader = req.header('first');
    const secondHeader = req.header('second');
    const host = req.header('host');
    res.send(firsHeader + " " + secondHeader + " " + host);
    res.end();
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})