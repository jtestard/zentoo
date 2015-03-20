var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Zentoo' });
});

// TODO : write full CRUD specification.

module.exports = router;
