const express = require('express');

const allRouter = express.Router();

allRouter.route('/all').all((req, res, next) => {
    console.log('I am Logging Something');
    next();
})
    .get((req, res) => {
        res.send('I Am GET');
    })
    .post((req, res) => {
        res.send('I Am POST');
    })
    .put((req, res) => {
        res.send('I Am PUT');
    })
    .delete((req, res) => {
        res.send('I Am DELETE');
    })


module.exports = allRouter;