'use strict';
export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    strName: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    strUsername: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your username'
      }
    },
    strEmail: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your email'
      }
    },
    strPassword: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your password'
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8) {
            throw new Error('Password should be atleast 8 characters');
          }
        }
      }
    }
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Book, {
      foreignKey: 'intUserId'
    });
  };
  return User;
};