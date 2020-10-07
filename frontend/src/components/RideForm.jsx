import React, { useState } from 'react';
import RideService from '../services/RideService';
import UploadService from '../services/UploadPictureService';

import Avatar from '@material-ui/core/Avatar';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function RideForm() {
	const classes = useStyles();

	const initialRideState = {
		id: '',
		name: '',
		picture: '',
		startLocation: '',
		altitude: undefined,
		mountain: '',
		kilometers: undefined,
		elevation: undefined,
		averageSlope: undefined,
		maxSlope: undefined,
	};
	const [ride, setRide] = useState(initialRideState);
	const [selectedPictures, setSelectedPictures] = useState(undefined);
	const [currentPicture, setCurrentPicture] = useState(undefined);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setRide({ ...ride, [name]: value });
	};

	const selectPicture = (e) => {
		setSelectedPictures(e.target.files);
	};

	const upload = () => {
		let currentPicture =
			selectedPictures === undefined ? undefined : selectedPictures[0];

		setCurrentPicture(currentPicture);

		RideService.createWithPicture(currentPicture);

		setSelectedPictures(undefined);
	};

	const saveRide = (e) => {
		e.preventDefault();
		const data = {
			name: ride.name,
			picture: ride.picture,
			startLocation: ride.startLocation,
			altitude: ride.altitude,
			mountain: ride.mountain,
			kilometers: ride.kilometers,
			elevation: ride.elevation,
			averageSlope: ride.averageSlope,
			maxSlope: ride.maxSlope,
		};

		RideService.create(data)
			.then((res) => {
				setRide({
					id: res.data.id,
					name: res.data.name,
					picture: res.data.picture,
					startLocation: res.data.startLocation,
					altitude: res.data.altitude,
					mountain: res.data.mountain,
					kilometers: res.data.kilometers,
					elevation: res.data.elevation,
					averageSlope: res.data.averageSlope,
					maxSlope: res.data.maxSlope,
				});
			})
			.catch((err) => console.log(err));
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<DirectionsBikeIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Add a ride
				</Typography>
				<form
					className={classes.form}
					onSubmit={saveRide}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="name"
						name="name"
						value={ride.name}
						onChange={handleInputChange}
						label="name"
						required
						autoFocus
						variant="outlined"
						margin="normal"
						fullWidth
					/>
					<TextField
						id="mountain"
						name="mountain"
						value={ride.mountain}
						onChange={handleInputChange}
						label="mountain"
						variant="outlined"
						margin="normal"
						fullWidth
					/>
					<input
						id="upload-picture"
						name="upload-picture"
						value={ride.picture}
						onChange={selectPicture}
						type="file"
						accept="image/*"
						style={{ display: 'none' }}
					/>
					<label htmlFor="upload-picture">
						<Button
							component="span"
							color="secondary"
							variant="contained"
							aria-label="add"
							onClick={upload}
						>
							<AddIcon /> Add picture
						</Button>
					</label>
					<TextField
						id="kilometers"
						name="kilometers"
						value={ride.kilometers}
						onChange={handleInputChange}
						label="kilometers"
						variant="outlined"
						margin="normal"
						fullWidth
						InputProps={{
							endAdornment: <InputAdornment position="end">Km</InputAdornment>,
						}}
					/>
					<TextField
						id="elevation"
						name="elevation"
						value={ride.elevation}
						onChange={handleInputChange}
						label="elevation"
						variant="outlined"
						margin="normal"
						fullWidth
						InputProps={{
							endAdornment: <InputAdornment position="end">m</InputAdornment>,
						}}
					/>
					<TextField
						id="averageSlope"
						name="averageSlope"
						value={ride.averageSlope}
						onChange={handleInputChange}
						label="averageSlope"
						variant="outlined"
						margin="normal"
						fullWidth
						InputProps={{
							endAdornment: <InputAdornment position="end">%</InputAdornment>,
						}}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						className={classes.submit}
						color="primary"
					>
						Send
					</Button>
				</form>
			</div>
		</Container>
	);
}

export default RideForm;
