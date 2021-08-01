const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.status(200);
    res.send('Welcome to Home Page');
    res.end();
})

app.post('/header', (req, res) => {

    const firsHeader = req.header('first');
    const secondHeader = req.header('second');
    res.send(firsHeader + " " + secondHeader)
    res.end();
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})