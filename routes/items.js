var express = require('express');
var router = express.Router();

var items = [
  { name: 'item 1' },
  { name: 'item 2' },
  { name: 'item 3' }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('items', { title: 'Item List', items: items });
});

module.exports = router;
