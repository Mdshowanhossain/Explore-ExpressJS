const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome to Home Page');
    res.end();
})

app.get('/query', (req, res) => {
    const firstQuery = req.query.first
    const secondQuery = req.query.second
    res.send(firstQuery + " " + secondQuery);
    res.end();
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})