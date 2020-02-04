import Sequelize from 'sequelize';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
let db = {};
const databaseURI = 'postgres://localhost:5432/plannerpal';
const uri = '';

if (config.use_env_variable) {
  db = new Sequelize(process.env[config.use_env_variable], config);
} else {
  db = new Sequelize(databaseURI, { logging: false});
}

module.exports = db;
