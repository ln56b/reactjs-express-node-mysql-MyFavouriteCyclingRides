const db = require('../models');
const Ride = db.rides;

exports.getAllRides = (req, res) => {
	Ride.findAll()
		.then((rides) => res.status(200).send(rides))
		.catch((err) => res.status(500).json({ err }));
};

exports.getOneRide = (req, res) => {
	const id = req.params.id;

	Ride.findByPk(id)
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({
				message: 'Error retrieving Ride with id=' + id,
			});
		});
};
