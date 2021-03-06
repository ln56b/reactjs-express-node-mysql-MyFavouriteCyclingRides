import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
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
	empty: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '20px',
	},
}));

function RidesGallery({ rides, getRides }) {
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
				<div className={classes.empty}>
					<Card>
						<CardContent>
							<Typography variant="body1" color="textPrimary" component="p">
								Please add your first ride
							</Typography>
						</CardContent>
					</Card>
				</div>
			)}
		</div>
	);
}

RidesGallery.propTypes = {
	rides: PropTypes.array.isRequired,
	getRides: PropTypes.func.isRequired,
};

export default RidesGallery;
