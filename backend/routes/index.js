var express = require('express');
var router = express.Router();

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});



module.exports = router;

