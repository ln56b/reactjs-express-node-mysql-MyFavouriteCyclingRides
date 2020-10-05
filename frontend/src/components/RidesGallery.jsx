import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
		margin: 25,
	},
	media: {
		height: 300,
		width: 350,
		objectFit: 'cover',
	},
}));

function RidesGallery() {
	const classes = useStyles();
	const [rides, setRides] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		axios
			.get('/api/rides')
			.then((res) => {
				setRides(res.data);
			})
			.catch((err) => {
				setError(err.message);
			});
	}, []);

	return (
		<div className="rides-gallery">
			{rides.map((ride) => (
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
