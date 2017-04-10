'use strict'
const api = require('express').Router()
const db = require('../db')
const Student = require('../db/models/Student');
const Campus = require('../db/models/campus');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({ hello: 'world' }))

api.get('/', (res, req, next) => {
	Student.findAll()
		.then((foundUser) => {
			res.send(foundUser)
		})
		.catch(next);
});

api.get('/student/:id', (res, req, next) => {
	Student.findById(req.params.id)
		.then((foundUser) => {
			res.send(foundUser)
		})
		.catch(next);
});

api.post('/student/add', (res, req, next) => {
	Student.create(req.body)
		.then((createdUser) => {
			res.status(201).send(createdUser)
		})
		.catch(next);
});

api.delete('/students/:id', (req, res, next) => {
	Student.destroy({
		where: {
			id: req.params.id
		}
	})
		.then((student) => {
			res.status(204).send(`deleted ${student}`);
		})
		.catch(next);
})

api.put('/student/:id', (req, res, next) => {
	Student.update(req.body,
		{ where: { id: req.params.id } })
		.then(() => {
			return Student.findOne({
				where: { id: req.params.id }
			});
		})
		.then(student =>
			res.status(200).json(student))
		.catch(next);
});


/*------------------------------CAMPUS------------------------------*/

api.get('/campuses', (req, res, next) => {
	Campus.findAll()
	.then(campuses => res.send(campuses))
	.catch(next);
})

api.get('/campus/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then(campus => res.send(campus))
	.catch(next);
});

api.post('campus/add', (req, res, next) => {
	Campus.create(req.body)
		.then((createdCampus) => {
			res.send(createdCampus)
		})
		.catch(next);
});

api.delete('/campuses/:id', (req, res, next) => {
	Campus.destroy({
		where: { id: req.params.id }})
	.then(campus =>
		res.status(204).send(`deleted ${campus}`))
	.catch(next);
});

api.put('/campus/:id', (req, res, next) => {
	Campus.update(req.body,
		{ where: {id: req.params.id} })
	.then(() => {
		return Campus.findOne({
			where: { id: req.params.id }
		});
	})
	.then(campus =>
		res.status(200).send(campus))
	.catch(next);
});

module.exports = api;
