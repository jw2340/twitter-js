const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
const nunjucks = require('nunjucks')
const routes = require('./routes/');

app.use('/', routes);

app.listen(3000, function() {
  console.log('server listening')
});

// app.get('/', function (req, res) {
//   // res.send('Hello World!')
//   const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// res.render( 'index', {title: 'Hall of Fame', people: people} );
// })

// doesn't log GET /
app.use('/', function (req, res, next) {
  console.log(req.method, req.path, res.statusCode);
  next();
});

app.use(express.static('public'));

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
