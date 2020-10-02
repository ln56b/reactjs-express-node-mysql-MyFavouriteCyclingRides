const express = require('express');

const bodyParser = require('body-parser');
const db = require('../conf');

const router = express.Router({ mergeParams: true });

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res, next) => {
	db.query('SELECT * FROM rides', (err, results) => {
		console.log(err);
		if (err) {
			res.status(500).send('Error getting this ride');
		} else {
			res.json(results);
		}
	});
});

module.exports = router;
