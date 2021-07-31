const express = require('express');

const app = express();

// Response Status Code

app.get('/', (req, res) => {
    res.status(200);
    res.end('I am Home')
})

app.delete('/delete', (req, res) => {
    res.status(401);
    res.end('UnAuthorized');
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})