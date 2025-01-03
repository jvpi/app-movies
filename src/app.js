var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session  = require('express-session')
var indexRouter = require('./routes/index');
const routerSeries = require('./routes/index');
var usersRouter = require('./routes/users');
const adminRouter = require('./routes/admin.js')
const flash = require('connect-flash')
const passport = require('passport')
const cors = require('cors')

const app = express();
require('./config/passport.js')
app.disable('x-powered-by')
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session ({
    secret: "super ultra secreto",
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')),
// express.static(path.join(__dirname)));
let directoioPadre = path.dirname(__dirname)
app.use(express.static(directoioPadre))
app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
   res.locals.error_msg = req.flash('error_msg');
   res.locals.error = req.flash('error');
   /*este es el ssuario guardado en sesion por passport*/
   res.locals.usuario = req.user || null;
   next()
})

app.use(indexRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
