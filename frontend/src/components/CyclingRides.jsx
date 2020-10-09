import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import RideService from '../services/RideService';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import MyProfile from './MyProfile';
import ResponsiveDrawer from './ResponsiveDrawer';
import RideForm from './RideForm';
import RidesGallery from './RidesGallery';
import NewsCarousel from './NewsCarousel';
import SignIn from './Signin';

const THEME = createMuiTheme({
	typography: {
		fontFamily: `'Architects Daughter', cursive`,
		fontSize: 16,
	},
});

function CyclingRides() {
	const initialRideState = {
		id: '',
		name: '',
		picture: '',
		startLocation: '',
		altitude: 0,
		mountain: '',
		kilometers: 0,
		elevation: 0,
		averageSlope: 0,
		maxSlope: 0,
	};

	const [rides, setRides] = useState([]);
	const [, setError] = useState('');
	const [ride, setRide] = useState(initialRideState);
	const [selectedPicture, setSelectedPicture] = useState(undefined);

	const getRides = () => {
		RideService.findAll()
			.then((res) => setRides(res.data))
			.catch((err) => setError(err.message));
	};

	const saveRide = (e) => {
		e.preventDefault();

		RideService.create(ride, selectedPicture)
			.then(() => console.log('The ride has been successfully created.'))
			.catch((err) => console.log(err));
	};

	const deleteRide = (ride) => {
		//TODO
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setRide({ ...ride, [name]: value });
	};

	const selectPicture = (e) => {
		const picture = e.target.files[0];
		setSelectedPicture(picture);
	};

	return (
		<div className="cycling-rides">
			<MuiThemeProvider theme={THEME}>
				<ResponsiveDrawer />
				<Route exact path={['/']} component={NewsCarousel}></Route>
				<Route
					path={['/rides']}
					render={(props) => (
						<RidesGallery
							{...props}
							rides={rides}
							getRides={getRides}
							deleteRide={deleteRide}
						/>
					)}
				></Route>
				<Route
					path={['/add']}
					render={(props) => (
						<RideForm
							{...props}
							ride={ride}
							saveRide={saveRide}
							handleInputChange={handleInputChange}
							selectPicture={selectPicture}
						/>
					)}
				></Route>
				<Route path={['/profile']} component={MyProfile}></Route>
				<Route path={['/signin']} component={SignIn}></Route>
			</MuiThemeProvider>
		</div>
	);
}

export default CyclingRides;
