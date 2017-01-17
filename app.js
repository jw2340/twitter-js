const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan');
const nunjucks = require('nunjucks')

app.listen(3000, function() {
  console.log('server listening')
});

app.get('/', function (req, res) {
  // res.send('Hello World!')
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
res.render( 'index', {title: 'Hall of Fame', people: people} );
})

// doesn't log GET /
app.use('/', function (req, res, next) {
  console.log(req.method, req.path, res.statusCode);
  next();
});

app.use('/special/', function (req, res, next) {
  res.send('you reached special area');
  next();
});

app.use('/news', function (req, res, next) {
  res.send('visit news')
});

// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//     console.log(output);
// });

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
