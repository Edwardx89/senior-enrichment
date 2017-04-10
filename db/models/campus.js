'use strict';
var Sequelize = require('sequelize');
var db = require('../index.js');


module.exports = db.define('campus', {
  schoolName: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  image: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    }
  }

});
