const express = require('express');

const app = express();

// Simple String Response

app.get('/', (req, res) => {
    res.send('HELLO! I am Express JS')
    res.end();
})

app.post('/about', (req, res) => {
    res.send('HELLO! I am About Page');
    res.end();
})

app.delete('/delete', (req, res) => {
    res.send('HELLO! I am About Page');
    res.end();
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})