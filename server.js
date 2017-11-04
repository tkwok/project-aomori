/*	Project Aomori
	Started 10.01.2017
	Author: Tony Kwok
*/
'use strict';

const express = require('express'),
	app = express(),
	port = process.env.PORT || 3500,
	mongoose = require('mongoose'),
	Task = require('./api/models/model'),
	bodyParser = require('body-parser'),
	routes = require('./api/routes/route');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, {
	useMongoClient: true,
	socketTimeoutMS: 0,
	keepAlive: true,
	reconnectTries: 30
}, (error) => {
	if (error) console.error(error);
	else console.log('MongoDB Connected');
});	

// CORS 
app.all('/*', (request, response, next) => {
	response.header('Access-Control-Allow-Origin', '*');
	response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	response.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
	if (request.method === 'OPTIONS') {
		response.status(200).end();
	} else {
		next();
	}
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);

console.log('RESTful API server started on ' + port);

app.use((request, response) => {
	response.status(404).send({url: request.originalUrl + ' not found'})
});