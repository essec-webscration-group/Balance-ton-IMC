const express = require('express');
const exphbs = require('express-handlebars');
const port = 3000;

const app = express();
app.engine('hbs', exphbs({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');

// Main route to index page
app.get('/', function (req, res) {
    res.render("index");
})

// Route to IMC page
app.get('/imc', function (req, res) {
    res.render("imc");
})

// Route to blog page
app.get('/blog', function (req, res) {
    res.render("blog");
})

// Route to static files
app.get('/static/:file', (req, res) => res.sendFile(__dirname + "/static/" + req.params.file));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));