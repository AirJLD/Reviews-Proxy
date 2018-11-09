const Sequelize = require('sequelize');

const config = {
  host: 'localhost',
  database: 'airjld',
  user: 'root',
  password: '',
};

module.exports = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

// CODE FOR VANILLA MYSQL SETUP
// const mysql = require('mysql2');
// mysql.createConnection()

// connection.connect((err) => {
//   if (err) {
//     // console.log(err)
//     connection.query(`CREATE DATABASE IF NOT EXISTS ${connection.database}`, (err, result) => {
//       if (err) {
//         throw err;
//       } else {
//         console.log("Database created");
//       }
//     })
//   } else {
//     console.log("Connected to DATABASE!");
//   }
// });
//
