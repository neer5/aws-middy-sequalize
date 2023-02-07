const Sequelize = require('sequelize');
const { sequelize } = require('../config/db');

const schema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  role: Sequelize.STRING,
};

const User = sequelize.define('user', schema, {
  tableName: 'user',
  timestamps: false,
});
User.associate = (models) => {
  console.log("==============models-user============",models)
  // associations can be defined here
  User.hasOne(models.Post, { foreignKey: 'userId' });
};
module.exports = User;
