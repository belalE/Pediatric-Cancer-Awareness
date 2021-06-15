const express = require('express');
const path = require('path');
const app = express();
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/home')
})
app.get('/research', (req, res) => {
    res.render('pages/research')
})
app.get('/types', (req, res) => {
    res.render('pages/types')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})