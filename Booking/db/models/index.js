const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports = {
  User: db.define('user', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),
  Booking: db.define('booking', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    listing_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    end_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    total_cost: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    host_booking: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
  }),
  Customer: db.define('customer', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }),
  Listing: db.define('listing', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    owner_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    review_count: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    day_rate: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cleaning_fee: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    service_fee: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    max_guests: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    avg_weekly_views: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    avg_monthly_views: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    total_views: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    stars: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  }),
};
