// -- Index Page Controller

var utils = require('../utils/utils');
var express = require('express');
var router = express.Router();

var business = {};
var reviews = {};

business.get = function(req, res) {
	res.render('pages/index', {
		template : "businesses",
		utils : utils
	});
};
reviews.get = function(req, res) {
	res.render('pages/index', {
		template : "businesses",
		utils : utils
	});
};

/* GET pages. */
router.get('/', business.get);
router.get('/reviews', reviews.get);
router.get('/businesses', business.get);

module.exports = router;