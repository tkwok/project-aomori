'use strict';

const userModel = require('../models/model');

module.exports.getUsers = (request, response) => {
	userModel.find({}, (error, task) => {
		if (error) response.send(error);
		response.json(task);
	});
};