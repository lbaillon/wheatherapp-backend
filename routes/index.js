var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/year', (req, res) => {
  let date = new Date().getFullYear().toString()
  res.json({year: date})
})

module.exports = router;

