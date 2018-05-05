'use strict';

const UserModel = require('../models/model');
const helperServices = require('../../helper/services/commonServices');

module.exports = {
	addUser: (request, response) => {
		let newUser = new UserModel(request.body);
		newUser.save((error, user) => {
			response.json(user);
			console.log(helperServices.saltHashText('test123'));
		});
	},
	getUsers: (request, response) => {
		UserModel.find({}, (error, user) => {
			if (error) response.send(error);
			response.json(user);
		});
	}
}

