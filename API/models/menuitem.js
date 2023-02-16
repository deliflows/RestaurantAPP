'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MenuItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MenuItem.init({
    dishname: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT,
    allergyinfo: DataTypes.STRING,
    menusection: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MenuItem',
  });
  return MenuItem;
};