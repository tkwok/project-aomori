'use strict';

let mongoose = require('mongoose'),
	Task = mongoose.model('Task');

exports.getAll = (request, response) => {
	Task.find({}, (error, task) => {
		if (error) response.send(error);
		response.json(task);
	});
};

exports.create = (request, response) => {
	let newTask = new Task(request.body);

	newTask.save((error, task) => {
		if (error) response.send(error); 
		response.json(task);
	});
};

exports.get = (request, response) => {
	Task.findById(request.params.taskId, (error, task) => {
		if (error) response.send(error); 
		response.json(task);
	});
};

exports.update = (request, response) => {
	Task.findOneAndUpdate({
		_id: request.params.taskId
	}, request.body, {new: true}, (error, task) => {
		response.send(error);
		response.json(task);
	});
};

exports.delete = (request, response) => {
	Task.remove({
		_id: request.params.taskId
	}, (error, task) => {
		if (error) response.send(error);
		response.json({ message: 'Task successfully deleted'});
	});
};