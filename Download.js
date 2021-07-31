const express = require('express');

const app = express();

// JSON Response

app.get('/', (req, res) => {
    res.status(200);
    res.end('I am Home')
})

app.get('/photo', (req, res) => {
    res.status(200);
    res.download('./images/ame.svg');
    // res.end('Thank You For Download');
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})