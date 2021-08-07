const express = require('express');
const app = express();

const router = express.Router({
    caseSensitive: true,
});
app.use(router);

// app.use(express.json());
// app.use(express.text());
// app.use(express.urlencoded());
// app.use(express.raw());
// const router = app.use(express.Router({
//     caseSensitive: true,
// }));

// app.use(express.static(`${__dirname}/public/`, {
//     index: 'home.html',
// }));


router.get('/home', (req, res) => {
    console.log(req.body);
    res.send('I am Home GET')
})

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('I am Home POST')
})

app.listen(4000, () => {
    console.log('Your server is running')
})