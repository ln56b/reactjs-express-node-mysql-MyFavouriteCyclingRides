import React from 'react';
import Header from './Header';
import MyProfile from './MyProfile';
import RideForm from './RideForm';
import RidesGallery from './RidesGallery';

function CyclingRides() {
	return (
		<div className="cycling-rides">
			<Header />
			<RidesGallery />
			<RideForm />
			<MyProfile />
		</div>
	);
}

export default CyclingRides;
