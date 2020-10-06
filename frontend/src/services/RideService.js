import http from '../http-common';

const create = (data) => {
	return http.post('/rides', data);
};

const findAll = () => {
	return http.get('/rides');
};

const findOne = (id) => {
	return http.get(`/rides/${id}`);
};

const update = (id, data) => {
	return http.put(`/rides/${id}`, data);
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
