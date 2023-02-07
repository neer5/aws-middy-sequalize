const Sequelize = require('sequelize');
const { sequelize } = require('../config/db');

const schema = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  userId: Sequelize.INTEGER,
};

const Post = sequelize.define('post', schema, {
  tableName: 'post',
  timestamps: false,
});

Post.associate = (models) => {
  console.log("==============models============",models)
  // associations can be defined here
  Post.belongsTo(models.User, { foreignKey: 'userId', });
};
module.exports = Post;
