import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
let db = {};

if (config.use_env_variable) {
  db = new Sequelize(process.env[config.use_env_variable], config);
} else {
  db = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = db;
