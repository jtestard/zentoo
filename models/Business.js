var mongoose = require('mongoose');

var BusinessSchema = new mongoose.Schema({
  business_id: String,
  full_address: String,
  open: Bool,
  city: String,
  text: String,
  name: String,
  categories : [String],
  stars : double
});

module.exports = mongoose.model('Businesses', BusinessSchema);