var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/setcookie', function(req, res, next) {

  var cookieObj = {
    title: "A Few of My Favorite Things...",
    list: ["Raindrops on roses", "Whiskers on kittens", "Bright copper kettles",
      "Warm woolen mittens", "Brown paper packages tied up with strings"]
  };

  res.cookie('list_cookie', cookieObj, {expire : new Date() + 9999});
  res.send("Cookie set");
});

router.get('/clearcookie', function(req,res){
  res.clearCookie('list_cookie');
  res.send('Cookie deleted');
});

module.exports = router;
