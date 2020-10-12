import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import RideService from '../services/RideService';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import MyProfile from './MyProfile';
import ResponsiveDrawer from './ResponsiveDrawer';
import RideCard from './RideCard';
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

function CyclingRides(props) {
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

	let history = useHistory();

	const getRides = () => {
		RideService.findAll()
			.then((res) => setRides(res.data))
			.catch((err) => setError(err.message));
	};

	const getRideById = (id) => {
		RideService.findOne(id)
			.then((res) => setRide(res.data))
			.catch((err) => setError(err.message));
	};

	const createRide = () => {
		RideService.create(ride, selectedPicture)
			.then(() => {
				history.push('/rides');
			})
			.catch((err) => console.log(err));
	};

	const updateRide = () => {
		RideService.update(ride.id, ride)
			.then(() => {
				history.push('/rides');
			})
			.catch((err) => console.log(err));
	};

	const saveRide = (e) => {
		e.preventDefault();
		ride.id ? updateRide() : createRide();
	};

	const deleteRide = (ride, id) => {
		setRide(ride);
		RideService.remove(id)
			.then(() => {
				history.push('/rides');
				getRides();
			})
			.catch((err) => console.log(err));
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
				<Route exact path="/" component={NewsCarousel}></Route>
				<Route exact path="/rides">
					<RidesGallery
						rides={rides}
						getRides={getRides}
						getRideById={getRideById}
					/>
				</Route>
				<Route exact path="/add-ride">
					<RideForm
						ride={ride}
						saveRide={saveRide}
						handleInputChange={handleInputChange}
						selectPicture={selectPicture}
					/>
				</Route>
				<Route path="/rides/:id">
					<RideCard
						ride={ride}
						getRideById={getRideById}
						deleteRide={deleteRide}
					/>
				</Route>
				<Route path="/profile" component={MyProfile}></Route>
				<Route path="/signin" component={SignIn}></Route>
			</MuiThemeProvider>
		</div>
	);
}

export default CyclingRides;
