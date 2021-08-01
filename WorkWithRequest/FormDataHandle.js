const express = require('express');
const bodyParser = require('body-parser');
var multer = require('multer');

var multer = multer();

const app = express();
app.use(bodyParser.json());
app.use(multer.array());
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome to Home Page');
    res.end();
})

app.post('/formData', (req, res) => {

    res.status(200);
    const formData = req.body;
    res.send(JSON.stringify(formData));
    res.end();
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})