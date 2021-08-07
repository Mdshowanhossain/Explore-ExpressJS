const express = require('express');
const app = express();
const adminRouter = express.Router();
const handler = require('./handler');

app.use(express.json());
app.use('/admin', adminRouter);

adminRouter.get('/dashboard/', (req, res) => {
    // console.log(req.baseUrl);
    // console.log(req.url);
    // console.log(req.originalUrl);
    // console.log(req.ip);
    // console.log(req.path);
    // console.log(req.hostname);
    // console.log(req.method);
    // console.log(req.protocol);
    res.send('I am Home Admin');
})

app.get('/user/:id', (req, res) => {
    // console.log(req.originalUrl);
    // console.log(req.params);
    // console.log(req.query);
    // console.log(req.body);
    res.send('I am Home Get');
})

app.get('/handler', handler)

app.get('/', (req, res) => {
    console.log(req.route);
    res.send('I am Home Post');
})

app.post('/', (req, res) => {
    console.log(req.route);
    res.send('I am Home Post');
})

app.get('/accepts/', (req, res) => {

    if (req.accepts('html')) {
        res.render();
    } else {
        res.send('I am accepts');
    }

})

app.listen(4000, () => {
    console.log('Your Server is running Now')
})