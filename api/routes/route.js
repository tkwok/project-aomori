'use strict';

module.exports = (app) => {
	const controller = require('../controllers/controller');

	app.route('/user')
		.all(controller.addUser);

	app.route('/users')
		.get(controller.getUsers);
};