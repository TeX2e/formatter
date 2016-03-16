var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('features/json', { title: 'JSON formatter' });
});

module.exports = router;
