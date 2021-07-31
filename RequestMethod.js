const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('HELLO! I am Express JS')
})

app.post('/about', (req, res) => {
    res.send('HELLO! I am About Page');
})


app.delete('/delete', (req, res) => {
    res.send('HELLO! I am About Page');
})


app.put('/contact', (req, res) => {
    res.send('I am Your Contact Page');
})




app.listen(8000, () => {
    console.log('I am listening on 8000')
})