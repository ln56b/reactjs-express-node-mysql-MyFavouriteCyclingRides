import React, { useState } from 'react';
import axios from 'axios';
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
import { useForm } from 'react-hook-form';

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
	const [name, setName] = useState('');
	const [mountain, setMountain] = useState('');
	const [picture, setPicture] = useState('');
	const [distance, setDistance] = useState(0);
	const [elevation, setElevation] = useState(0);
	const [averageSlope, setAverageSlope] = useState(0);

	const { register, handleSubmit } = useForm();

	const upload = (e) => {
		const data = new FormData();
		data.append('name', name);
		data.append('file', picture);

		axios
			.post('https://httpbin.org//anything', data)
			.then((res) => console.log(res))
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
					onSubmit={handleSubmit}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="name"
						name="name"
						inputRef={register}
						onChange={(e) => setName(e.target.value)}
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
						inputRef={register}
						onChange={(e) => setMountain(e.target.value)}
						label="mountain"
						variant="outlined"
						margin="normal"
						fullWidth
					/>
					<input
						id="upload-picture"
						name="upload-picture"
						onChange={(e) => {
							const file = e.target.files[0];
							setPicture(file);
						}}
						ref={register}
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
						id="distance"
						name="distance"
						onChange={(e) => setDistance(e.target.value)}
						inputRef={register}
						label="distance"
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
						onChange={(e) => setElevation(e.target.value)}
						inputRef={register}
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
						onChange={(e) => setAverageSlope(e.target.value)}
						inputRef={register}
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
