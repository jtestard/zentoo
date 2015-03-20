// -- Requires
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var config = require('./config/config');
var mongo = require('./config/mongo-config');
var error = require('./config/error-config');
var routes = require('./routes/index');
var reviews = require('./routes/reviews');

// Start Mongo
mongo.connect();

// Setup View Engine
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Add locals 
app.locals = config.locals;

// Setup Routes
app.use('/', routes);
app.use('/api/reviews', reviews);

// Error Handlers
app.use(error.error404);
app.use(error.error);

// Start the application
app.listen(config.web.port);

module.exports = app;