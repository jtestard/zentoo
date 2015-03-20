// -- Variables
var error = {};

// -- Functions
error.error404 = function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
};

// TODO: write production error handler. this is development only.
error.error = function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('partials/error', {
        message: err.message,
        error: err
    });
};

module.exports = error; 