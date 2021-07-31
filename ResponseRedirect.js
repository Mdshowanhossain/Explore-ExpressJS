const express = require('express');

const app = express();

// Response Redirect

app.get('/', (req, res) => {
    res.status(200);
    res.send('I am Your Home');
    res.end()
})

app.get('/ame', (req, res) => {
    res.status(200);
    res.redirect('http://localhost:8000/sohan');
})

app.get('/sohan', (req, res) => {
    res.status(200);
    res.send('Hello I am Redirect')
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})