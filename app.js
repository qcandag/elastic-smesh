var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


var createRouter = require('./routes/create');
var deleteRouter = require('./routes/delete');
var dAddRouter = require('./routes/document_add');
var dDellRouter = require('./routes/document_delete');
var infoRouter = require('./routes/info');
var searchRouter = require('./routes/search');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/documentadd', dAddRouter);
app.use('/documentdelete', dDellRouter);

app.use('/indexcreate', createRouter);
app.use('/indexdelete', deleteRouter);

app.use('/indexinfo', infoRouter);
app.use('/search', searchRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000,  () => {
  console.log('Listening PORT:3000');
});


module.exports = app;
