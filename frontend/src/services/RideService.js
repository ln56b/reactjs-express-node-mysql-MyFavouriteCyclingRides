import http from '../http-common';

exports.create = (data) => {
	return http.post('/rides', data);
};

exports.findAll = () => {
	return http.get('/rides');
};

exports.findOne = (id) => {
	return http.get(`/rides/${id}`);
};

exports.update = (id, data) => {
	return http.put(`/rides/${id}`, data);
};

exports.delete = (id) => {
	return http.delete(`rides/${id}`);
};
