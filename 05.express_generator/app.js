//control errores
var createError = require('http-errors');
// lo de siempre
var express = require('express');
var path = require('path');
//control de cookies
var cookieParser = require('cookie-parser');
// registrar todas las solicitudes de http
var logger = require('morgan');

//dos rutas ya hechas con sus archivos bases
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var petsRouter = require('./routes/pets');
var fortyRouter = require('./routes/forty');
var carsRouter = require('./routes/cars');
var showcaseRouter = require('./routes/showcase');

var app = express();

//ruta estática a la carpeta views, donde están las vistas ejs(templates)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//indica mostrar las peticiones http por consola
app.use(logger('dev'));

//equivalente a body-parser(para recoger datos)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Instanciamos la libreria para cookies
app.use(cookieParser());

// Ruta estática a la carpeta public(css, imagenes, js)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pets', petsRouter);
app.use('/forty', fortyRouter);
app.use('/cars', carsRouter);
app.use('/showcase', showcaseRouter);

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
