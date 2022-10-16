const { DataTypes } = require("sequelize");
const db = require('../db');

const Hero = db.define("heroes", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
 });

 module.exports = Hero;