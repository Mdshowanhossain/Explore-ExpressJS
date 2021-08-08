const express = require('express');
const userRouter = express.Router();


const userRouterAll = (req, res, next) => {
    console.log('I am Testing For Catch All Route');
    next();
}
userRouter.use('*', userRouterAll);

userRouter.get('/', (req, res) => {
    res.send('I am Your UserRouter');
})
userRouter.get('/login', (req, res) => {
    res.send('I am Your UserRouter Login');
})
module.exports = userRouter;