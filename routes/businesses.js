// -- Review API Controller

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Business = require('../models/Businesses.js');

/**
 * GET '/reviews' listing. The SQL equivalent is :
 * 
 * 		select *
 * 		from Reviews
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

///**
// * GET '/reviews/:id' list. The SQL equivalent is :
// * 
// * 		select *
// * 		from Reviews r
// * 		where r.text 
// * 
// */
//router.get('/:id', function(req, res, next) {
//	  Todo.findById(req.params.id, function (err, post) {
//	    if (err) return next(err);
//	    res.json(post);
//	  });
//	});

//TODO : write full CRUD specification.

module.exports = router;
