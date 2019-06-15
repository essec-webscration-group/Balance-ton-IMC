const express = require('express');
const exphbs = require('express-handlebars');
const port = 3000;

const app = express();
//app.engine('hbs', exphbs({ defaultLayout: 'main.hbs' }));
//app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));