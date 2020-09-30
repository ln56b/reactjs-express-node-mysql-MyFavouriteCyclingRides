import React from 'react';
import Header from './Header';
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
		</div>
	);
}

export default CyclingRides;
