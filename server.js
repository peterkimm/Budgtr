const express = require('express');
const app = express();
const budget = require('./models/budget');
const port = 3000;




app.use(express.urlencoded({ extended: false }))

// INDEX
app.get('/budget', (req, res) => {
    res.render('index.ejs', {
        allBudget: budget
    });
});


// NEW
app.get('/budget/new', (req, res) => {
    res.render('new.ejs')
});


// CREATE
app.post('/budget', (req, res) => {
    budget.push(req.body)
    console.log(budget)
    res.redirect('/budget')
});


// SHOW
app.get('/budget/:index', (req, res) => {
    res.render('show.ejs', {
        budgets: budget[req.params.index],
    });
});










app.listen(port, () => {
    console.log(`express is listening`, port)
});