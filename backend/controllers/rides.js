const db = require('../models');
const Ride = db.rides;
Ride.sync();

exports.createRide = (req, res) => {
	const rideWithPic = {
		...req.body,
		picture: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
	};

	Ride.create(rideWithPic)
		.then(() =>
			res.status(201).json({
				message: `The ride has been created: ${JSON.stringify(rideWithPic)}`,
			})
		)
		.catch((err) => {
			if (req.file === undefined) {
				return res.status(400).send({ message: 'Please upload a picture' });
			} else if (err.code === 'LIMIT_FILE_SIZE') {
				return res
					.status(500)
					.send({ message: 'The picture size should be 2Mo max.' });
			}
			res.status(500).send({
				message: `Could not save the ride: ${req.body.name} ${err}`,
			});
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
