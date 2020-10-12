import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
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
		// maxWidth: 500,
		// margin: 25,
	},
	media: {
		height: 300,
		width: 350,
		objectFit: 'cover',
	},
	actions: {
		display: 'flex',
		justifyContent: 'space-between',
	},
}));

function RideCard({ ride, getRideById, deleteRide }) {
	const classes = useStyles();

	let { id } = useParams();

	useEffect(() => {
		getRideById(id);
	}, [id]);

	return (
		<div className="ride-card">
			{ride.picture ? (
				<Card className={classes.card} key={ride.id}>
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
					<CardActions className={classes.actions}>
						<Link to="/add-ride">
							<Button size="small" variant="contained" color="primary">
								Update ride
							</Button>
						</Link>
						<Button
							onClick={() => deleteRide(ride, ride.id)}
							size="small"
							variant="contained"
							color="secondary"
						>
							Delete ride
						</Button>
					</CardActions>
				</Card>
			) : (
				<CircularProgress />
			)}
		</div>
	);
}

RideCard.propTypes = {
	ride: PropTypes.object.isRequired,
	getRideById: PropTypes.func.isRequired,
	deleteRide: PropTypes.func.isRequired,
};

export default RideCard;
