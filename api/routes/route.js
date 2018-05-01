'use strict';

module.exports = (app) => {
	const controller = require('../controllers/controller');

	// app.route('/user')
		// .all(function(req, res, next) {
		// 	console.log(controller);
		// 	next();
	  	// })
	// 	.post(controller.addUser);

	app.route('/users')
		.all(controller.getUsers);
};