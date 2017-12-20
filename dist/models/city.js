'use strict';
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('City', {
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return City;
};