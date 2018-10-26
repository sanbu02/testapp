var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	let name = req.query.name || 'Guest';
	let data = {};
	data.name = name;
	res.send(data);
});

module.exports = router;
