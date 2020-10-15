import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import RideService from '../services/RideService';

import { useConfirmationDialog } from './ConfirmationDialog';
import Notification from './Notification';
import MyProfile from './MyProfile';
import ResponsiveDrawer from './ResponsiveDrawer';
import RideCard from './RideCard';
import RideForm from './RideForm';
import RidesGallery from './RidesGallery';
import NewsCarousel from './NewsCarousel';
import SignIn from './Signin';

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
	const [notify, setNotify] = useState({
		isOpen: false,
		message: '',
		type: '',
	});

	let history = useHistory();
	const { getConfirmation } = useConfirmationDialog();

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
			.then(() =>
				setNotify({
					isOpen: true,
					message: `The ride ${ride.name} has been created`,
					type: 'success',
				})
			)
			.then(() => setRide(initialRideState))
			.then(() => {
				history.push('/rides');
			})
			.catch((err) => {
				console.log(err);
				setNotify({
					isOpen: true,
					message: 'Impossible to create this ride',
					type: 'error',
				});
			});
	};

	const updateRide = () => {
		RideService.update(ride.id, ride, selectedPicture)
			.then(() =>
				setNotify({
					isOpen: true,
					message: `The ride ${ride.name} has been updated`,
					type: 'success',
				})
			)
			.then(() => setRide(initialRideState))
			.then(() => {
				history.push('/rides');
			})
			.catch((err) => {
				console.log(err);
				setNotify({
					isOpen: true,
					message: `Impossible to update ride ${ride}`,
					type: 'error',
				});
			});
	};

	const saveRide = (e) => {
		e.preventDefault();
		ride.id ? updateRide() : createRide();
	};

	const deleteRide = async (ride, id) => {
		const confirmed = await getConfirmation({
			title: 'Delete ride ?',
			message: 'This action cannot be cancelled.',
		});

		if (confirmed) {
			RideService.remove(id)
				.then(() =>
					setNotify({
						isOpen: true,
						message: `The ride ${ride.name} has been deleted`,
						type: 'success',
					})
				)
				.then(() => {
					history.push('/rides');
					getRides();
				})
				.catch((err) => {
					console.log(err);
					setNotify({
						isOpen: true,
						message: `Impossible to delete ride ${ride}`,
						type: 'error',
					});
				});
		}
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
			<ResponsiveDrawer />
			<Notification notify={notify} setNotify={setNotify} />
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
		</div>
	);
}

export default CyclingRides;
