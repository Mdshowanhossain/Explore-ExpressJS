const handler = (req, res) => {
    console.log(req.app.get('sohan'));
    res.send('I am handler Get');
}
module.exports = handler;