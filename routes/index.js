// -- Index Page Controller

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('pages/index', { template : "reviews" });
});

module.exports = router;
