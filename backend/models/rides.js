/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rides', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    startLocation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    altitude: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    mountain: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    kilometers: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    elevation: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    averageSlope: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    maxSlope: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rides'
    });
};
