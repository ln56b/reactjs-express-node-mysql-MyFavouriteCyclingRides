import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import { Fab, Button } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

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
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function RideForm() {
	const classes = useStyles();
	const { handleSubmit } = useForm();

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
						margin="normal"
						fullWidth
						label="Name"
						required
					/>
					<TextField id="mountain" margin="normal" fullWidth label="mountain" />
					<label htmlFor="upload-picture">
						<input
							style={{ display: 'none' }}
							id="upload-picture"
							name="upload-picture"
							type="file"
							required
						/>
						<Fab
							color="secondary"
							size="small"
							component="span"
							aria-label="add"
							variant="extended"
						>
							<AddIcon /> Add picture
						</Fab>
					</label>
					<TextField
						id="distance"
						margin="normal"
						fullWidth
						label="distance"
						InputProps={{
							endAdornment: <InputAdornment position="end">Km</InputAdornment>,
						}}
					/>
					<TextField
						id="elevation"
						margin="normal"
						fullWidth
						label="elevation"
						InputProps={{
							endAdornment: <InputAdornment position="end">m</InputAdornment>,
						}}
					/>
					<TextField
						id="averageSlope"
						margin="normal"
						fullWidth
						label="averageSlope"
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
