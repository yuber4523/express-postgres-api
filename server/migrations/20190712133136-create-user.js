'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      strUsername: {
        allowNull: false,
        type: Sequelize.STRING
      },
      strEmail: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      strPassword: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};