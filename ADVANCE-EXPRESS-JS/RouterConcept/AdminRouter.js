const express = require('express');
const adminRouter = express.Router();


// <------------------------METHOD NUMBER ONE------------------------>

// adminRouter.param('user', (req, res, next, id) => {
//     req.user = id === '1' ? 'My Friend' : `I Don't Know You!`;
//     next();
// })

// adminRouter.get('/:user', (req, res) => {
//     res.send(`Hello, ${req.user}`);
// })

// <------------------------METHOD NUMBER ONE------------------------>



adminRouter.param((param, option) => (req, res, next, val) => {

    if (val === option) {
        next();
    } else {
        res.sendStatus(404);
    }
});

adminRouter.param('user', '12')

adminRouter.get('/:user', (req, res) => {
    res.send('I am Admin');
})

adminRouter.get('/login', (req, res) => {
    res.send('I am Your AdminRouter Login');
})

module.exports = adminRouter;