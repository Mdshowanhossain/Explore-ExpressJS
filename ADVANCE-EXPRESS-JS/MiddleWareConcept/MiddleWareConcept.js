const express = require('express');
const app = express();

const adminRouter = express.Router();






// <------------------------------APPLICATION LABEL MIDDLEWARE ------------------------------>
// const myMiddleWare1 = (req, res, next) => {
//     console.log('I am a middleware 1');
//     next();
// }
// const myMiddleWare2 = (req, res, next) => {
//     console.log('I am a middleware 2');
//     next();
// }
// app.use(myMiddleWare1);
// app.use(myMiddleWare2);

// const myLogging = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleTimeString()} - ${req.method} - ${req.originalUrl}  - ${req.protocol}- ${req.ip}`);
//     next();
// }
// app.use(myLogging);
// <------------------------------APPLICATION LABEL MIDDLEWARE ------------------------------>


// <------------------------------ROUTER LABEL MIDDLEWARE ------------------------------>
// const myLogging = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleTimeString()} - ${req.method} - ${req.originalUrl}  - ${req.protocol}- ${req.ip}`);
//     next();
// }
// adminRouter.use(myLogging)


// adminRouter.get('/dashboard', (req, res) => {
//     res.send('I am Your Admin Dashboard');
// })
// app.use('/admin', adminRouter)
// <------------------------------ROUTER LABEL MIDDLEWARE ------------------------------>

// <------------------------------ERROR LABEL MIDDLEWARE ------------------------------>

// const myLogging = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleTimeString()} - ${req.method} - ${req.originalUrl}  - ${req.protocol}- ${req.ip}`);

//     throw new Error('I am Your Error Middleware');
// }
// adminRouter.use(myLogging)

// adminRouter.get('/dashboard', (req, res) => {
//     res.send('I am Your Admin Dashboard');
// })
// app.use('/admin', adminRouter)


// const errorMiddleWareHandle = (err, req, res, next) => {
//     console.log(err.message);
//     res.status(500).send('There Was a Server side Error');
//     res.end();
// }
// adminRouter.use(errorMiddleWareHandle)

// <------------------------------ERROR LABEL MIDDLEWARE ------------------------------>





// <------------------------------WRAPPER LABEL MIDDLEWARE ------------------------------>

const myLoggingWrapper = (option) => {
    return function (req, res, next) {
        if (option.log) {
            console.log(`${new Date(Date.now()).toLocaleTimeString()} - ${req.method} - ${req.originalUrl}  - ${req.protocol}- ${req.ip}`);
            next();
        }
        else {
            throw new Error('I am Your Error Middleware');

        }
    }
}

adminRouter.use(myLoggingWrapper({ log: true }))
// adminRouter.use(myLoggingWrapper({ log: false }))

adminRouter.get('/dashboard', (req, res) => {
    res.send('I am Your Admin Dashboard');
})
app.use('/admin', adminRouter)


const errorMiddleWareHandle = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('There Was a Server side Error');
    res.end();
}
adminRouter.use(errorMiddleWareHandle);

// <------------------------------WRAPPER LABEL MIDDLEWARE ------------------------------>



app.get('/about', (req, res) => {
    res.send('I am About');
    res.end();
})


app.listen(4000, () => {
    console.log('Your Server is running Now')
})