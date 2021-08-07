const handle = ('/', (req, res) => {
    console.log(req.app.locals.title);
    res.send('I am Get')
})
module.exports = handle;