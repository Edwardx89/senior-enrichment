'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into Sequelize so any other part of the application could call Sequelize.model('Student') OR Sequelize.models.Student to get access to the `Student` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)

const Student = require('./Student');
const Campus = require('./campus');

Campus.hasMany(Student);
Student.belongsTo(Campus);

module.exports = {Student, Campus}
