const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.status(200);
    res.send('Welcome to Home Page');
    res.end();
})

app.post('/header', (req, res) => {
    res.status(200);
    const name = req.header('username');
    const password = req.header('password');
    res.send('username:' + " " + name + " " + 'password:' + " " + password);
    res.end();

})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})