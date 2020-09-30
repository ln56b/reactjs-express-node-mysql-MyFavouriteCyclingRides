import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ventoux from '../assets/ventoux.jpg';
import galibier from '../assets/galibier.jpg';
import aspin from '../assets/aspin.jpg';

const RIDES = [
	{
		id: 1,
		name: 'Mont Ventoux',
		picture: ventoux,
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
		id: 2,
		name: 'Col du Galibier',
		picture: galibier,
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
		id: 3,
		name: "Col d'Aspin",
		picture: aspin,
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
		id: 4,
		name: 'Mont Ventoux',
		picture: ventoux,
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
		id: 5,
		name: 'Col du Galibier',
		picture: galibier,
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
		id: 6,
		name: "Col d'Aspin",
		picture: aspin,
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

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345,
		margin: 5,
	},
	media: {
		height: 300,
		width: 350,
		objectFit: 'cover',
	},
}));

function RidesGallery() {
	const classes = useStyles();

	return (
		<div className="rides-gallery">
			{RIDES.map((ride) => (
				<Card className={classes.root} key={ride.id}>
					<CardHeader title={ride.name} subheader={ride.mountain} />
					<CardMedia
						className={classes.media}
						image={ride.picture}
						title={ride.name}
					/>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							Distance: {ride.kilometers}km
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							Elevation: {ride.elevation}m
						</Typography>{' '}
						<Typography variant="body2" color="textSecondary" component="p">
							Average slope: {ride.averageSlope}m
						</Typography>
					</CardContent>
					<CardActions>
						<Button size="small" color="primary">
							Learn More
						</Button>
					</CardActions>
				</Card>
			))}
		</div>
	);
}

export default RidesGallery;
