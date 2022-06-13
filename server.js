console.log('OK')

// Import Module Global
const express = require('express');
const {
    engine
} = require('express-handlebars');

const app = express();


app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');

// Route fichier static
app.use('/assets', express.static('public'))

app.get('/', function (req, res) {
    res.render('home');
})

app.get('/contacts', function (req, res) {
    res.render('contacts');
})


app.listen(3000)
