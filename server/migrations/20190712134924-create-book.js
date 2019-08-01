'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      strTitle: {
        allowNull: false,
        type: Sequelize.STRING
      },
      strAuthor: {
        allowNull: false,
        type: Sequelize.STRING
      },
      strDescription: {
        type: Sequelize.STRING
      },
      intQuantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      intUserId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'intUserId'
        }
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
    return queryInterface.dropTable('Books');
  }
};