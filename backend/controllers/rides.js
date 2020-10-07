const db = require('../models');
const Ride = db.rides;

exports.createRide = (req, res) => {
	const ride = {
		name: req.body.name,
		picture: req.body.picture,
		startLocation: req.body.startLocation,
		altitude: req.body.altitude,
		mountain: req.body.mountain,
		kilometers: req.body.kilometers,
		elevation: req.body.elevation,
		averageSlope: req.body.averageSlope,
		maxSlope: req.body.maxSlope,
	};

	const rideWithPic = new Ride({
		...ride,
		picture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
	});

	Ride.create(rideWithPic)
		.then(() => {
			res.status(201).json({ message: 'The ride has been created.' });
		})
		.catch((err) => {
			res.status(500).json({ err });
		});
};

exports.getAllRides = (req, res) => {
	Ride.findAll()
		.then((rides) => res.status(200).json(rides))
		.catch((err) => res.status(500).json({ err }));
};

exports.getOneRide = (req, res) => {
	const id = req.params.id;

	Ride.findByPk(id)
		.then((ride) => {
			res.json(ride);
		})
		.catch((err) => res.status(500).json({ err }));
};

exports.updateRide = (req, res) => {
	const rideId = req.params.id;

	Ride.update(req.body, {
		where: { id: rideId },
	})
		.then(() => res.status(200).json({ message: 'The ride has been updated.' }))
		.catch((err) => res.status(500).json({ err }));
};

exports.deleteRide = (req, res) => {
	const rideId = req.params.id;

	Ride.destroy({
		where: { id: rideId },
	})
		.then(() => res.status(200).json({ message: 'Ride successfully deleted' }))
		.catch((error) => res.status(400).json({ error }));
};
