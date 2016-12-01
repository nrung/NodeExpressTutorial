var express = require('express');
var router = express.Router();

var auth = function(req, res, next) {
  var name = req.query.name;
  if(name === 'Dan' || req.cookies.list_cookie) {
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

  var title = "Item List";
  var items = [];
  console.log(items);
  console.log(req.cookies);
  if(req.cookies.list_cookie) {
    title = req.cookies.list_cookie.title;
    items = req.cookies.list_cookie.list;
  }
  console.log(items);

  res.render('items', { title: title, items: items});
});

router.get('/protected', auth, function(req, res, next) {
  res.render('items', { title: 'Protected Item List', items: items });
});

module.exports = router;
