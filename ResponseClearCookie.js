const express = require('express');

const app = express();

// Response ClearCookie

app.get('/', (req, res) => {
    res.status(200);
    res.send('I am Your Home');
    res.end()
})

app.post('/clearCookie', (req, res) => {
    res.status(200);
    res.clearCookie('name');
    res.clearCookie('roll');
    res.clearCookie('city');
    res.end('Clear Your Cookie!');
})


app.listen(8000, () => {
    console.log('I am listening on 8000')
})