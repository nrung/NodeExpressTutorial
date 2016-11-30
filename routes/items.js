var express = require('express');
var router = express.Router();

var items = [
  { name: 'item 1' },
  { name: 'item 2' },
  { name: 'item 3' }
];

var auth = function(req, res, next) {
  var name = req.query.name;
  if(name === 'Dan') {
    next();
  } else {
    var err = new Error('Unauthorized');
    err.status = 403;
    next(err);
  }
};

router.use('/', function(req, res, next) {
  console.log('hit!');
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('items', { title: 'Item List', items: items });
});

router.get('/protected', auth, function(req, res, next) {
  res.render('items', { title: 'Protected Item List', items: items });
});

module.exports = router;
