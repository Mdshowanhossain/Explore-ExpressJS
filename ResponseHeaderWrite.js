const express = require('express');

const app = express();

// Header Write

app.get('/', (req, res) => {
    res.status(200);
    res.send('I am Your Home');
    res.end()
})

app.get('/header', (req, res) => {

    res.append("SOHAN", "HOSSAIN");
    res.status(200);
    res.send('I am Your Header Writing');
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})