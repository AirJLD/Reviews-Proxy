const Sequelize = require('sequelize');

const config = {
  host: 'localhost',
  database: 'ReviewSystem',
  user: 'root',
  password: '',
};

module.exports = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
