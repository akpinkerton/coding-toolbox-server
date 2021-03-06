var express = require('express');
const cors = require("cors");
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
require('dotenv').config()

var index = require('./routes/index');
var resources = require('./routes/resources');
var templates = require('./routes/templates');
var reading_list = require('./routes/reading-list');
var testroute = require('./routes/test');
var dev = require('./routes/dev');
var icons = require('./routes/icons');
var gym = require('./routes/gym');




var app = express();

app.use(cors());
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/resources', resources);
app.use('/templates', templates);
app.use('/readinglist', reading_list);
app.use('/test', testroute);
app.use('/dev', dev);
app.use('/gym', gym);
app.use('/icons', icons);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      'dev error': {
        message: err.message,
        error: err
      }
    });
  });
}

// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    'prod error': {
      message: err.message,
      error: {}
    }
  });
});


module.exports = app;
