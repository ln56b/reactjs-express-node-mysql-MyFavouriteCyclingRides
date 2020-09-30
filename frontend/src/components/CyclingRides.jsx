import React from 'react';

import MyProfile from './MyProfile';
import ResponsiveDrawer from './ResponsiveDrawer';
import RideForm from './RideForm';
import RidesGallery from './RidesGallery';

function CyclingRides() {
	return (
		<div className="cycling-rides">
			<RidesGallery />
			<RideForm />
			<MyProfile />
			<ResponsiveDrawer />
		</div>
	);
}

export default CyclingRides;
