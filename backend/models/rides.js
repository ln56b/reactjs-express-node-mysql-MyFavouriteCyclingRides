module.exports = (sequelize, Sequelize) => {
	const Ride = sequelize.define(
		'rides',
		{
			id: {
				autoIncrement: true,
				type: Sequelize.INTEGER(11),
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING(100),
				allowNull: true,
			},
			picture: {
				type: Sequelize.STRING(300),
				allowNull: true,
			},
			startLocation: {
				type: Sequelize.STRING(100),
				allowNull: true,
			},
			altitude: {
				type: Sequelize.INTEGER(11),
				allowNull: true,
			},
			mountain: {
				type: Sequelize.STRING(100),
				allowNull: true,
			},
			kilometers: {
				type: Sequelize.FLOAT,
				allowNull: true,
			},
			elevation: {
				type: Sequelize.INTEGER(11),
				allowNull: true,
			},
			averageSlope: {
				type: Sequelize.FLOAT,
				allowNull: true,
			},
			maxSlope: {
				type: Sequelize.FLOAT,
				allowNull: true,
			},
		},
		{
			sequelize,
			tableName: 'rides',
			timestamps: false,
		}
	);
	return Ride;
};
