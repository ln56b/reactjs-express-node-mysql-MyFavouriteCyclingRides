const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

app.use(bodyParser.json());

app.post('/api/rides', (req, res, next) => {
	res.status(201).json({
		message: 'The ride has been created',
	});
});

app.use('/api/rides', (req, res, next) => {
	const rides = [
		{
			_id: 'afroznkfneiz',
			name: 'Mont Ventoux',
			// picture: ventoux,
			startLocation: 'Bédoin',
			altitude: 1909,
			mountain: 'Provence',
			country: 'France',
			kilometers: 22.7,
			elevation: 1622,
			averageSlope: 7.15,
			maxSlope: 10.8,
		},
		{
			_id: 'sdkfneorijo',
			name: 'Col du Galibier',
			// picture: galibier,
			startLocation: 'Col du Lautaret',
			altitude: 2642,
			mountain: 'Arves et Grandes Rousses',
			country: 'France',
			kilometers: 8.5,
			elevation: 585,
			averageSlope: 6.88,
			maxSlope: 12.1,
		},
		{
			_id: 'pazknrginr',
			name: "Col d'Aspin",
			// picture: aspin,
			startLocation: 'Arreau',
			altitude: 1489,
			mountain: 'Pyrénées centrales',
			country: 'France',
			kilometers: 12,
			elevation: 779,
			averageSlope: 6.49,
			maxSlope: 9.5,
		},
		{
			_id: 'zinefizngi',
			name: 'Mont Ventoux',
			// picture: ventoux,
			startLocation: 'Bédoin',
			altitude: 1909,
			mountain: 'Provence',
			country: 'France',
			kilometers: 22.7,
			elevation: 1622,
			averageSlope: 7.15,
			maxSlope: 10.8,
		},
		{
			_id: 'zgknkrgeitj',
			name: 'Col du Galibier',
			// picture: galibier,
			startLocation: 'Col du Lautaret',
			altitude: 2642,
			mountain: 'Arves et Grandes Rousses',
			country: 'France',
			kilometers: 8.5,
			elevation: 585,
			averageSlope: 6.88,
			maxSlope: 12.1,
		},
		{
			_id: 'kzdfefijrt',
			name: "Col d'Aspin",
			// picture: aspin,
			startLocation: 'Arreau',
			altitude: 1489,
			mountain: 'Pyrénées centrales',
			country: 'France',
			kilometers: 12,
			elevation: 779,
			averageSlope: 6.49,
			maxSlope: 9.5,
		},
	];
	res.status(200).json(rides);
});

module.exports = app;
