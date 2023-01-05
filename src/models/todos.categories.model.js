const db = require('../utils/database');

const {DataTypes} = require('sequelize');

const TodosCategories = db.define('todos_categories', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  },
});