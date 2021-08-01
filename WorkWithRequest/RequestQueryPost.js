const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.status(200);
    res.send('Welcome to Home Page');
    res.end();
})

app.post('/query', (req, res) => {
    res.status(200);
    const first = req.query.first;
    const second = req.query.second;
    res.send(first + ' ' + second)
    res.end();

})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})