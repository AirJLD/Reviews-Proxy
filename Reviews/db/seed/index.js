const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports = {
  Users: db.define('customers', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    avatarUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }),
  Reviews: db.define('reviews', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    reviewer_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    review_body: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    review_time: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    review_report: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    accuracy: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    communication: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cleanliness: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    'check-in': {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    value: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    location: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    house_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }),
};
