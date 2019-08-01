'use strict';
export default (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    strTitle: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your book title'
      }
    },
    strAuthor: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your book author'
      }
    },
    strDescription: DataTypes.STRING,
    intQuantity: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Please enter quantity'
      }
    },
    intUserId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
        as: 'intUserId'
      }
    }
  }, {});
  Book.associate = (models) => {
    // associations can be defined here
    Book.belongsTo(models.User, {
      foreignKey: 'intUserId',
      onDelete: 'CASCADE'
    });
  };
  return Book;
};