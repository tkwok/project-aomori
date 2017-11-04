'use strict';

module.exports = (app) => {
	let controller = require('../controllers/controller');

	app.route('/task')
		.get(controller.getAll)
		.post(controller.create);

	app.route('/task/:taskId')
		.get(controller.get)
		.put(controller.update)
		.delete(controller.delete);
};