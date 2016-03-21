var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var json = require('./routes/json/index');
var yaml = require('./routes/yaml/index');
var cson = require('./routes/cson/index');
var markdown = require('./routes/markdown/index');
var html = require('./routes/html/index');
var css = require('./routes/css/index');
var sass = require('./routes/sass/index');
var scss = require('./routes/scss/index');
var less = require('./routes/less/index');
var xml = require('./routes/xml/index');
var coffee = require('./routes/coffee/index');
var js = require('./routes/js/index');
var typescript = require('./routes/typescript/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/', [
  json, yaml, cson, xml,
  markdown, html, css, sass, scss, less,
  coffee, js, typescript
]);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });

  // to pretty print html
  app.locals.pretty = true;
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
