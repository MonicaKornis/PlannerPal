import { Sequelize, DataTypes } from 'sequelize';
import db from './db';

const User = db.define('User', {
  firstName: {
    type: DataTypes.string,
    allowNull: false
  },
  lastName: {
    type: DataTypes.string,
    allowNull: false
  },
  email: {
    type: DataTypes.string,
    allowNull: false
  }
});
