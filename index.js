const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');


const app = express();
app.use(bodyParser.json());
app.use(express.static('public'))



const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads')
    },

    filename: function (req, callback) {
        callback(null, file.originalname)
    }
})

const upload = multer({ storage: storage }).single('myfile');


app.get('/', (req, res) => {
    res.status(200);
    res.send('Welcome to Home Page');
    res.end();
})


app.post('/uploads', (req, res) => {

    upload(req, res, errors => {
        if (error) {
            console.log(error);
        } else {
            console.log('Your File Upload Success');
        }
    })
})

app.listen(8000, () => {
    console.log('I am listening on 8000')
})