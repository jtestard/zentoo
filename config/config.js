var config = {};

config.mongo = {};
config.locals = {};
config.web = {};

// -- Locals
config.locals.title = 'Zentoo';
config.locals.email = 'jules.testard@gmail.com';

// -- Mongo
config.mongo.host = 'localhost';
config.mongo.port = 27017;
config.mongo.dbName = 'zentoo';

// -- Web Server
config.web.port = 3000;

module.exports = config;