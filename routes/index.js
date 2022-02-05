var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {layout: './layouts/fullwidth'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {layout: './layouts/fullwidth'});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {layout: './layouts/fullwidth'});
});

router.get('/services', function(req, res, next) {
  res.render('services', {layout: './layouts/fullwidth'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {layout: './layouts/fullwidth'});
});

module.exports = router;
