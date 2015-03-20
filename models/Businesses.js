var mongoose = require('mongoose');

var BusinessSchema = new mongoose.Schema({
	business_id : String,
	full_address : String,
	open : Boolean,
	hours : {},
	city : String,
	text : String,
	name : String,
	categories : [ String ],
	attributes : {},
	stars : Number
});

module.exports = mongoose.model('Businesses', BusinessSchema);