// COMP229-F2020-Assignment2, Nguyen Khang Nguyen, 301098234, 10/25/2020
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
