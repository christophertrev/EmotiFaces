var express = require('express');
var app = express();
var emotionRoutes = require('./routes/emotionRoutes');
var morgan = require('morgan');


app.use(morgan('dev'));

app.use('/emotion', emotionRoutes);

app.get('*', function (req, res){
  res.status(404).send('You messed up buddy');
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);

});