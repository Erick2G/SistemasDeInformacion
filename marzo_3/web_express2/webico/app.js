var createError = require('http-errors');//importa modulo para errores http
var express = require('express');//importa modulo para el framework epxxpress
var path = require('path');//modilo para manejo de ruta, va a vargar archivos desde el sistema de archivos. Es para los contenidos estaticos
var cookieParser = require('cookie-parser');//bibliotecas para revision de cookies
//guardan
var logger = require('morgan');//indica todos los feventos que pasan por la aplicacione

//configuracion de rutas
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//variable de la applicacion express
var app = express();

// view engine setup
//view engine es
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//
app.use(logger('dev'));//determinar como se mandan a consola todos los eventos
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));//es un middlewere, para servir archivos estaticos

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

module.exports = app;
