let express = require('express'),
	app = express(),
	port = process.env.PORT || 3500,
	mongoose = require('mongoose'),
	Task = require('./api/models/todoListModel'),
	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGOLAB_URI + '/tododb', (error) => {
	if (error) console.error(error);
	else console.log('mongo connected');
});	

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

let routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log('RESTful API server started on ' + port);

app.use((request, response) => {
	response.status(404).send({url: request.originalUrl + ' not found'})
});