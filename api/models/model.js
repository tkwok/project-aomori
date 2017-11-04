'use strict';

let mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	TaskSchema = new Schema({
	name: {
		type: String,
		require: 'Enter the name of the task'
	},
	createdDate: {
		type: Date,
		default: Date.now
	},
	status: {
		type: [{
			type: String,
			enum: ['pending', 'ongoing', 'completed']
		}],
		default: ['pending']
	}
});

module.exports = mongoose.model('Task', TaskSchema);