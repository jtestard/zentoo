var mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  user_id: String,
  review_id: String,
  stars: Number,
  date: Date,
  text: String,
  type: String,
  business_id: String,
  votes: { funny: Number, useful: Number, cool : Number}
});

module.exports = mongoose.model('Reviews', ReviewSchema);