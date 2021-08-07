const express = require('express');
const handle = require('./handle');

const app = express();
const admin = express();
app.enable('case sensitive routing');
app.set('view engine', 'ejs')

// <---------app.locals Method--------->
// app.locals.title = 'This is my-app'
// app.get('/', handle);
// <---------app.locals Method--------->

// <---------app.mountpath Method--------->
// admin.on('mount', function (parent) {
//     console.log('Admin Mounted')
//     console.log(parent) // refers to the parent app
// })
// admin.get('/secure', (req, res) => {
//     console.log(admin.mountpath)
//     res.send('I am Your Admin');
// })
// app.use('/admin', admin);
// <---------app.mountpath Method--------->


// <---------app.all Method--------->
// app.all('/', (req, res) => {
//     res.send('I am your All')
// })
// <---------app.all Method--------->


// <---------app.param--------->
// app.param('id', (req, res, next, id) => {

//     const friend = {
//         userID: id,
//         name: 'sohan',
//     }
//     req.friendDetails = friend;
//     next();
// })

// app.get('/friend/:id', (req, res) => {
//     console.log(req.friendDetails);
//     res.send('I am Your Friend ID');
// })
// <---------app.param--------->

// <---------app route--------->
// app.route('/routeMethod/explore')
//     .get((req, res) => {
//         res.render('pages/copyHtml');

//     })
//     .post((req, res) => {
//         res.send('I am Your Post Route Post');
// })
// <---------app route--------->

app.get('/home', (req, res) => {
    res.send('I am Get')

})

app.get('/', (req, res) => {
    res.send('I am Get')
})

app.post('/', (req, res) => {
    res.send('I am Post')
})

app.listen(4000, () => {
    console.log('Your server is running')
})