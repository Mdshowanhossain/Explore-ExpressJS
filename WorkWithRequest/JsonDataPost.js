const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {

    res.status(200);
    res.send('Welcome to Home Page');
    res.end();
})

app.post('/jsonData', (req, res) => {

    res.status(200);
    let jsonData = req.body;
    const jsonDataStringy = JSON.stringify(jsonData);
    res.send(jsonDataStringy);
    res.end();
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})