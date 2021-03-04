const ARTICLES = require('./mock-articles');

module.exports = function(app){
    app.get('/articles', (req, res) => {
        res.send(ARTICLES);
    });
};