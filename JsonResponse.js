const express = require('express');

const app = express();

// JSON Response

app.get('/', (req, res) => {
    res.status(200);
    res.end('I am Home')
})

app.post('/post', (req, res) => {
    res.status(200);
    let JsonData = [{ "Name": "sohan", "Roll": "30", "Occupation": "Front-End Developer" }, { "Name": "sohan", "Roll": "30", "Occupation": "Front-End Developer" }, { "Name": "sohan", "Roll": "30", "Occupation": "Front-End Developer" }]
    res.send(JsonData);
    res.end();
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})