const express = require('express');

const app = express();

// Response Cookie

app.get('/', (req, res) => {
    res.status(200);
    res.send('I am Your Home');
    res.end()
})

app.post('/cookie', (req, res) => {
    res.status(200);
    res.cookie("name", "sohan");
    res.cookie("city", "khulna");
    res.cookie("roll", "44");
    res.end('Set Your Cookie');
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})