'use strict'
const api = require('express').Router()
const db = require('../db')
const User = require('../db/models/user');
const campus = require('../db/models/Campus');

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/', (res, req, next) => {
	User.findAll()
	.then((foundUser) => {
		res.send(foundUser)
	})
	.catch(next);
	});

api.get('/user/:id', (res, req, next) => {
	User.findById(req.params.id)
	.then((foundUser) => {
		res.send(foundUser)
	})
	.catch(next);
});

api.post('/user/add', (res, req, next) => {
	User.create(req.body)
	.then((createdUser) => {
		res.send(createdUser)
	})
	.catch(next);
});


module.exports = api
