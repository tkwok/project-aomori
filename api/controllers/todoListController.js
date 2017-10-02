'use strict';

var mongoose = require('mongoose'),
	Task = mongoose.model('Tasks');

exports.listAllTasks = (request, response) => {
	Task.find({}, (error, task) => {
		if (error) response.send(error);
		response.json(task);
	});
};

exports.createTask = (request, response) => {
	let newTask = new Task(request.body);

	newTask.save((error, task) => {
		if (error) response.send(error); 
		response.json(task);
	});
};

exports.readTask = (request, response) => {
	Task.findById(request.params.taskId, (error, task) => {
		if (error) response.send(error); 
		response.json(task);
	});
};

exports.updateTask = (request, response) => {
	Task.findOneAndUpdate({
		_id: request.params.taskId
	}, request.body, {new: true}, (error, task) => {
		response.send(error);
		response.json(task);
	});
};

exports.deleteTask = (request, response) => {
	Task.remove({
		_id: request.params.taskId
	}, (error, task) => {
		if (error) response.send(error);
		response.json({ message: 'Task successfully deleted'});
	});
};