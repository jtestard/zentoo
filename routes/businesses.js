// -- Review API Controller

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Business = require('../models/Businesses.js');

/**
 * GET '/api/businesses' listing. The SQL equivalent is :
 * 
 * 		select *
 * 		from Businesses
 * 		limit 10;
 * 
 */
router.get('/', function(req, res, next) {
  var query = Business.find({});
  query.limit(10);
  query.exec(function (err, reviews) {
    if (err) return next(err);
    res.json(reviews);
  });
});

/**
 * post '/api/businesses/' for searching. The SQL equivalent is :
 * 
 * 		select *
 * 		from Businesses r
 * 		where search in r.name 
 * 
 */
router.post('/', function(req, res, next) {
	var value = req.body.search;
	Business.find({ $text : { $search : value } }, function (err, post) {
	    if (err) return next(err);
	    res.json(post);
	  });
	});

//TODO : write full CRUD specification.

module.exports = router;
