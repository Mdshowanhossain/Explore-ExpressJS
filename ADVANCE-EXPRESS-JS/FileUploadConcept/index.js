const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const UPLOAD_FOLDER = './upload/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_FOLDER)
    },
    filename: (req, file, cb) => {
        const fileExtName = path.extname(file.originalname);
        const fileName = file.originalname
            .replace(fileExtName, "")
            .toLocaleLowerCase()
            .split(" ")
            .join("-") + "-" + Date.now();
        cb(null, fileName + fileExtName);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000,
    },
    fileFilter: (req, file, cb) => {

        if (file.fieldname === 'avatar') {

            if (
                file.mimetype === "image/png" ||
                file.mimetype === "image/jpg" ||
                file.mimetype === "image/jpeg"
            ) {
                cb(null, true);
            } else {
                cb(new Error("only .jpg, png, or jpeg format supported"));
            }

        } else if (file.fieldname === 'doc') {
            if (file.mimetype === "application/pdf") {
                cb(null, true);
            } else {
                cb(new Error("Only .pdf format allowed!"))
            }
        } else {
            cb(new Error("There was an unknown error!"))
        }
    }
});

app.post('/', upload.fields([
    { name: 'avatar', maxCount: 1 },
    { name: 'doc', maxCount: 1 }
]), (req, res) => {
    res.send('File Uploaded!');
})

app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(500).send('There Was a File Upload Problem Error');
        } else {
            res.status(500).send(err.message);
        }
    } else {
        res.send("success")
    }
})



app.listen(4000, () => {
    console.log('Your Server is running Now')
})