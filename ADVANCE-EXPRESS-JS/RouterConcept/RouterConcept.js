const express = require('express');
const adminRouter = require('./AdminRouter');
const userRouter = require('./userRouter');
const AllRoute = require('./AllRouter');
const app = express();

app.use('/userRouter/', userRouter);

app.use('/admin/', adminRouter);

app.use('/', AllRoute);



app.listen(4000, () => {
    console.log('Your Server is running Now')
})