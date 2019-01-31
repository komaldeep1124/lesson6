let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'home' });
});
/* GET abt page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'about' });
});
/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'contact' });
});
/* GET products page. */
router.get('/product', function(req, res, next) {
  res.render('index', { title: 'products' });
});

module.exports = router;

