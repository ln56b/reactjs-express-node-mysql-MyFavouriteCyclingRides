const { sequelize, Sequelize } = require('.');

module.exports = (sequelize, Sequelize) => {
	const Ride = sequelize.define('ride', {
		id: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING(100),
			allowNull: false,
		},
		picture: {
			type: Sequelize.STRING(300),
		},
		startLocation: {
			type: Sequelize.STRING(100),
		},
		altitude: {
			type: Sequelize.INTEGER(11),
		},
		mountain: {
			type: Sequelize.STRING(100),
		},
		kilometers: {
			type: Sequelize.FLOAT,
		},
		elevation: {
			type: Sequelize.INTEGER(11),
		},
		averageSlope: {
			type: Sequelize.FLOAT,
		},
		maxSlope: {
			type: Sequelize.FLOAT,
		},
	});
};
