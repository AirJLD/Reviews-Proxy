const {
  User,
  Listing,
  Customer,
  Booking,
} = require('../models/index.js');
const seedData = require('../seeders/data.js');
const db = require('../index.js');

const insertSampleData = () => {
  db.query('CREATE DATABASE IF NOT EXISTS airjld;')
    .then(() => db.sync({ force: true }))
    .then(() => User.bulkCreate(seedData.users))
    .then(() => Listing.bulkCreate(seedData.listings))
    .then(() => Customer.bulkCreate(seedData.customers))
    .then(() => Booking.bulkCreate(seedData.bookings))
    .then(() => db.close())
    .catch((err) => {
      db.close();
      throw err.parent;
    });
};

seedData.generate.users(20);
seedData.generate.customers(15);
seedData.generate.listings(100);
seedData.generate.bookings(50);
insertSampleData();

module.exports = insertSampleData;
