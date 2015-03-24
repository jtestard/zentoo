var mongoose = require('mongoose');
var mongoosastic = require("mongoosastic");

var BusinessSchema = new mongoose.Schema({
	business_id : String,
	full_address : { type:String, es_indexed : true },
	open : Boolean,
	hours : {},
	city : String,
	text : String,
	name : { type:String, es_indexed : true},
	categories : [ String ],
	attributes : {},
	stars : Number
});

BusinessSchema.plugin(mongoosastic);

var Business = mongoose.model('Business', BusinessSchema);
var stream = Business.synchronize();
var count = 0;

console.log("Start indexing on elastic search...");
stream.on('data', function(err, doc){
  count++;
  if ((count % 1000) == 0)
	  console.log("Indexed " + count + " documents...");
});
stream.on('close', function(){
  console.log('indexed ' + count + ' documents!');
});
stream.on('error', function(err){
  console.log(err);
});

module.exports = mongoose.model('Businesses', BusinessSchema);