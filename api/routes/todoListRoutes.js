'use strict';

module.exports = (app) => {
	let todoList = require('../controllers/todoListController');

	app.route('/tasks')
		.get(todoList.listAllTasks)
		.post(todoList.createTask);

	app.route('/tasks/:taskId')
		.get(todoList.readTask)
		.put(todoList.updateTask)
		.delete(todoList.deleteTask);
};