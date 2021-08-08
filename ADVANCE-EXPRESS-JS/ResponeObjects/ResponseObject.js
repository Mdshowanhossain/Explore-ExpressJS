const express = require('express');
const app = express();

app.use(express.json());

app.set('view engine', 'ejs');

// app.get('/about', (req, res) => {
//     console.log(res.headersSent)
//     res.render('pages/copyHtml', {
//         name: 'BANGLADESH',
//     })
//     console.log(res.headersSent)
// })


// app.get('/', (req, res) => {
// res.send('I am Your Home Page');
// res.end();
// res.json({
//     name: 'BANGLADESH',
//     age: 50,
// })
// res.status(400);
// res.end();
// res.sendStatus(401);
// })

// app.get('/format'), (req, res) => {
//     res.format({
//         'text/plain': () => {
//             res.send('I am Your Response Format');
//         },
//         'text/html': () => {
//             res.render('pages/CopyHtml', {
//                 name: 'I am Your Response EJS Format',
//             })
//         },
//         'application/json': () => {
//             res.json({
//                 message: 'I am Your Response JSON',
//             });
//         },
//         default: () => {
//             // res.status(404).send('Not Found');
//         }
//     })
// }

// app.get('/sohan', (req, res) => {
// res.send('I am sohan');
// })


// app.get('/cookie', (req, res) => {
// res.cookie('name', 'sohan')
// res.location('/test');
// res.redirect('/sohan');
// res.end();
// })


app.get('/set', (req, res) => {
    res.set('name', 'sohan');
    console.log(res.get('name'));
    res.end();
})








app.listen(4000, () => {
    console.log('Your Server is running Now')
})