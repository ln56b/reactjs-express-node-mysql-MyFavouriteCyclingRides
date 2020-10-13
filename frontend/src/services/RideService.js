import http from '../http-common';

const create = (ride, picture) => {
	const rideData = new FormData();

	rideData.append('ride', JSON.stringify(ride));
	rideData.append('picture', picture, picture.name);
	return http.post('/rides', rideData);
};

const findAll = () => {
	return http.get('/rides');
};

const findOne = (id) => {
	return http.get(`/rides/${id}`);
};

const update = (id, ride, picture) => {
	let rideData;
	if (!picture) {
		ride.picture = picture;
		rideData = ride;
	} else {
		rideData = new FormData();
		rideData.append('ride', JSON.stringify(ride));
		rideData.append('picture', picture, picture.name);
	}
	return http.put(`/rides/${id}`, rideData);
};

const remove = (id) => {
	return http.delete(`rides/${id}`);
};

export default {
	create,
	findAll,
	findOne,
	update,
	remove,
};
