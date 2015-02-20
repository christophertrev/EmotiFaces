require('newrelic');
var express = require('express');
var app = express();
var emotionRoutes = require('./routes/emotionRoutes');
var morgan = require('morgan');


app.set('port', (process.env.PORT || 8082));


app.use(morgan('dev'));

app.get('*',function (req, res, next){
  //add header for cors compliencey
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.use(express.static(__dirname + './../client'));

app.use('/emotion', emotionRoutes);

app.get('*', function (req, res){
  res.status(404).send('You messed up buddy');
});

// var server = app.listen(app.get('port'), function () {

//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('App listening at http://%s:%s', host, port);

// });

app.listen(app.get('port'));
console.log('App listening at on %s', app.get('port'));


module.exports = app;
