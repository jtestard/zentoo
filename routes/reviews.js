var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Review = require('../models/Review.js');

/* GET /reviews listing. */
router.get('/', function(req, res, next) {
  Review.find(function (err, reviews) {
    if (err) return next(err);
    res.json(reviews);
  }).limit(10);
});

module.exports = router;
