import React from 'react';
import Header from './Header';
import MyProfile from './MyProfile';
import NewsCarousel from './NewsCarousel';
import RideForm from './RideForm';
import RidesGallery from './RidesGallery';

function CyclingRides() {
	return (
		<div className="cycling-rides">
			<Header />
			<NewsCarousel />
			<RidesGallery />
			<RideForm />
			<MyProfile />
		</div>
	);
}

export default CyclingRides;
