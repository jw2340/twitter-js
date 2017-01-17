const express = require( 'express' );
const app = express(); // creates an instance of an express application

const morgan = require('morgan');
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser');
const routes = require('./routes/');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.use('/', routes);

app.listen(3000, function() {
  console.log('server listening')
});

app.use('/', function (req, res, next) {
  console.log(req.method, req.path, res.statusCode);
  next();
});

app.use(express.static('public'));

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
