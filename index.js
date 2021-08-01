const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {

    res.status(200);
    res.send('Welcome to Home Page');
    res.end();
})

app.post('/formData', (req, res) => {

    res.status(200);

})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})