var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Indian Cricketers' });
});

/* Player pages */
router.get('/virat', function(req, res, next) {
  res.render('virat', { title: 'Virat Kohli' });
});

router.get('/rohit', function(req, res, next) {
  res.render('rohit', { title: 'Rohit Sharma' });
});

router.get('/jasprit', function(req, res, next) {
  res.render('jasprit', { title: 'Jasprit Bumrah' });
});

router.get('/ravindra', function(req, res, next) {
  res.render('ravindra', { title: 'Ravindra Jadeja' });
});

module.exports = router;
