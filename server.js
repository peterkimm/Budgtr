const express = require('express');
const app = express();
const budget = require('./models/budget');
const port = 3000;




app.get('/', (req, res) => {
    res.send('hello')
});



app.listen(port, () => {
    console.log(`express is listening`, port)
});