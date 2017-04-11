'use strict'

// import axios from 'axios';
// const Promise = require('bluebird');
// const db = require('./db/models');
// const Student = require('./db/models/Student');
// const Campus = require('./db/models/campus');

// let data = {
//   student: [
//     { firstName: "Omri", email: "omri@fullstack.com" },
//     { firstName: "John", email: "john@fullstack.com" },
//     { firstName: "Damon", email: "Damon@fullstack.com" },
//     { firstName: "Ian", email: "ian@fullstack.com" },
//     { firstName: "Sam", email: "sam@fullstack.com" },
//   ],
//   campus: [
//     { schoolName: "FullStack Academy" },
//     { schoolName: "University 1" },
//     { schoolName: "App Academy" },
//     { schoolName: "Flatiron Academy" },
//   ]
// };

// db.sync({ force: true })
//   .then(function () {
//     console.log('syncing seed.js data');
//     return Promise.map(Object.keys(data), function (name) {
//       return Promise.map(data[name], function (item) {
//         return db.model(name)
//           .create(item)
//       });
//     });
//   })
//   .then(()=> console.log('finished seeding'))
//   .catch((err) => console.error('there was a problem', err))

