var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/category', function(req, res, next) {
  res.render('category', { title: 'Express' });
});

router.get('/newpost', function(req, res, next) {
  res.render('newpost', { title: 'Express' });
});

router.get('/join', function(req, res, next) {
  res.render('join', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/testController', function(req, res, next) {
  res.render('testController', { title: 'Express' });
});

module.exports = router;