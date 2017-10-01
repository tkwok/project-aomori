'use strict';

let mongoose = require('mongoose'),
	Schema = mongoose.Schema;

let TaskSchema = new Schema({
	name: {
		type: String,
		require: 'Kindly enter the name of the task'
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

module.exports = mongoose.model('Tasks', TaskSchema);