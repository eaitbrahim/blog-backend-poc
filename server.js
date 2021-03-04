const express = require('express');

const app = express();

app.listen(8000, () => {
    console.log('Server is started and listening on port 8000.');
})

app.get('/',  (req, res) => {
    res.send('Hello node js!!');
});

require('./articles')(app);