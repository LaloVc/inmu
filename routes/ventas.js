var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sección ventas' });
});

module.exports = router;
