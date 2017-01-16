const express = require( 'express' );
const app = express(); // creates an instance of an express application
const morgan = require('morgan')

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/', function (req, res, next) {
  console.log(req.method, req.path, res.statusCode);
  next();
});

app.use('/special/', function (req, res, next) {
  res.send('you reached special area');
  next()
});

app.use('/news', function (req, res, next) {
  res.send('visit news')
});

app.listen(3000, function() {
  console.log('server listening')
});

