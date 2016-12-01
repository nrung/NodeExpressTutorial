var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if(req.cookies.list_cookie) {
    var cookie = req.cookies.list_cookie;
    res.render('items', { title: cookie.title, items: cookie.list });
  } else {
    res.send('No cookie');
  }
});

router.get('/set', function(req, res, next) {
  var cookieObj = {
    title: "A Few of My Favorite Things...",
    list: [
      "Raindrops on roses",
      "Whiskers on kittens",
      "Bright copper kettles",
      "Warm woolen mittens",
      "Brown paper packages tied up with strings"
    ]
  };

  res.cookie('list_cookie', cookieObj);
  res.send("Cookie set");
});

router.get('/clear', function(req, res, next) {
  res.clearCookie('list_cookie');
  res.send('Cookie deleted');
});

module.exports = router;
