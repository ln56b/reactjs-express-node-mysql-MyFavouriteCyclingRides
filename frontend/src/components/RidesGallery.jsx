import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		display: 'flex',
		justifyContent: 'center',
		flexWrap: 'wrap',
		marginTop: '100px',
	},
	card: {
		maxWidth: 500,
		margin: 25,
	},
	media: {
		height: 300,
		width: 350,
		objectFit: 'cover',
	},
}));

function RidesGallery({ rides, getRides, getRideById }) {
	const classes = useStyles();

	useEffect(() => {
		getRides();
	}, []);

	return (
		<div className="rides-gallery">
			{rides.length ? (
				<Grid container className={classes.root} spacing={2}>
					{rides.map(
						(ride) =>
							ride.picture && (
								<Card className={classes.card} key={ride.id}>
									<CardHeader title={ride.name} subheader={ride.mountain} />
									<CardMedia
										className={classes.media}
										image={ride.picture}
										title={ride.name}
									/>
									<CardContent>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											Distance: {ride.kilometers}km
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											Elevation: {ride.elevation}m
										</Typography>{' '}
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											Average slope: {ride.averageSlope}m
										</Typography>
									</CardContent>
									<CardActions>
										<Link to={`/rides/${ride.id}`}>
											<Button size="small" color="primary">
												Learn more
											</Button>
										</Link>
									</CardActions>
								</Card>
							)
					)}
				</Grid>
			) : (
				<CircularProgress />
			)}
		</div>
	);
}

RidesGallery.propTypes = {
	rides: PropTypes.array.isRequired,
	getRides: PropTypes.func.isRequired,
};

export default RidesGallery;
