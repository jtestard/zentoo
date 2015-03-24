// -- Review API Controller

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Business = require('../models/Businesses.js');

// Mapping for Elastic Search
Business.createMapping(function(err, mapping){
	  if(err){
	    console.log('error creating mapping (you can safely ignore this)');
	    console.log(err);
	  }else{
	    console.log('mapping created!');
	    console.log(mapping);
	  }
	});

var searchResultFactory = function (res) {
	return function (err, post) {
	    if (err) return next(err);
	    res.json(post);
	  }
};

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
	var elastic = true; //req.body.elastic;
	if (!elastic) {
		Business.find({ $text : { $search : value } },
				{ "score": { "$meta": "textScore" } }
				)
				.sort({ "score": { "$meta": "textScore" }})
				.limit(20)
				.exec(function (err, post) {
				    if (err) return next(err);
				    res.json(post);
				  });
	} else {
		Business.search(
				{ 
					query_string : {
						fields : [ "name" ], // "full_address" ],
						query : value
					}
				},
				{ hydrate:true},
				function (err, post) {
				    if (err) return next(err);
				    res.json(post);
				  });
	}
	});

//TODO : write full CRUD specification.

module.exports = router;
