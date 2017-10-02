/*	Project Aomori
	Started 10.01.2017
*/
'use strict';

const express = require('express'),
	app = express(),
	port = process.env.PORT || 3500,
	mongoose = require('mongoose'),
	Task = require('./api/models/todoListModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

console.log('MONGODB_URI: ' + process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, (error) => {
	if (error) console.error(error);
	else console.log('mongo connected');
});	

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on ' + port);

app.use((request, response) => {
	response.status(404).send({url: request.originalUrl + ' not found'})
});