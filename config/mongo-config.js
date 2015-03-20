// -- Requires
var config = require('./config');
var mongoose = require('mongoose');


// -- Global Variables
var mongo = {};
var host = config.mongo.host;
var port = config.mongo.port;
var dbName = config.mongo.dbName; 
var mongoConnectURL = 'mongodb://' + host + ':' + port + '/' + dbName;

// -- Functions
mongo.connect = function() {
	mongoose.connect(mongoConnectURL, function(err) {
	    if(err) {
	        console.log('MongoDB connection error', err);
	    } else {
	        console.log('MongoDB connection successful');
	    }
	});
}

module.exports = mongo;