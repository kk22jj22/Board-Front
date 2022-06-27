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
  let { cateid } = req.query
  res.render('category', { title: 'Express' });
});

router.get('/newpost', function(req, res, next) {
  res.render('newpost', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.get('/postcontents', function(req, res, next) {
  let { boardId } = req.query
  res.render('postcontents', { title: 'Express' });
});

router.get('/')
module.exports = router;