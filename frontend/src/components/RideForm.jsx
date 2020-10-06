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
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};

	const handleUploadClick = (e) => {
		let file = e.target.file;
		alert(file);
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
					onSubmit={handleSubmit(onSubmit)}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="name"
						name="name"
						variant="outlined"
						inputRef={register}
						margin="normal"
						fullWidth
						label="name"
						required
						autoFocus
					/>
					<TextField
						id="mountain"
						name="mountain"
						variant="outlined"
						inputRef={register}
						margin="normal"
						fullWidth
						label="mountain"
					/>
					<input
						accept="image/*"
						style={{ display: 'none' }}
						id="upload-picture"
						name="upload-picture"
						ref={register}
						type="file"
						onChange={handleUploadClick}
					/>
					<label htmlFor="upload-picture">
						<Button
							component="span"
							color="secondary"
							variant="contained"
							aria-label="add"
						>
							<AddIcon /> Add picture
						</Button>
					</label>
					<TextField
						id="distance"
						name="distance"
						variant="outlined"
						inputRef={register}
						margin="normal"
						fullWidth
						label="distance"
						InputProps={{
							endAdornment: <InputAdornment position="end">Km</InputAdornment>,
						}}
					/>
					<TextField
						id="elevation"
						name="elevation"
						variant="outlined"
						inputRef={register}
						margin="normal"
						fullWidth
						label="elevation"
						InputProps={{
							endAdornment: <InputAdornment position="end">m</InputAdornment>,
						}}
					/>
					<TextField
						id="averageSlope"
						name="averageSlope"
						variant="outlined"
						inputRef={register}
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
