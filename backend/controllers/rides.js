const db = require('../conf');

exports.createRide = (req, res, next) => {
	const formData = req.body;

	query('INSERT INTO rides SET ?', formData, (err, results) => {
		if (err) {
			console.log(err);
			res.status(500).send('Error saving a ride');
		} else {
			res.sendStatus(200).json(results);
		}
	});
};

exports.getAllRides = (req, res, next) => {
	db.query('SELECT * FROM rides', (err, results) => {
		if (err) {
			res.status(500).send('Error getting this ride');
		} else {
			res.json(results);
		}
	});
};
