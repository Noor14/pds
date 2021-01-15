/**
 * Main application
 */

'use strict';

// node core modules dependencies

// third-party dependencies
const express = require('express');
var morganLogger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

// app modules
const appRoutes = require('./src/routes/app.routes.js');
const mongodbConnect = require('./src/mongodbConnect');

/* locals */
const config = {
	PORT: 3302,
	SERVE_DIR: '../clients/dist',
	//HOME_PAGE_REDIRECT: '/index.html',
	APP_NAME: 'QASWA DS'
};


/* initialization */
const app = express();

/* middlewares */
// app.use(morganLogger('combined'));
app.use(morganLogger('tiny'));

app.use(bodyParser.urlencoded({ extended: false })) // // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// Enable CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// serve FE app files
// TODO implement path module to use "go up" for "../client"
app.use(express.static(path.join(__dirname, config.SERVE_DIR)))

// app APIs routes
app.get('/', (req, res) => {
	// TODO - server shouldn't respond on root route. for security.
	res.send('Server is running.');
});

app.use('/api', appRoutes.default);
// appRoutes.default(app);

// 404 routes responder
app.use(function(req, res) {
	console.log('404 init.');
	res.status(404).sendFile(__dirname + '/src/views/404.html');
});

// initialize server
app.listen(config.PORT, (err) => {
	if (err) {
		console.log(config.APP_NAME + ' Node app running failed:', err);
	} else {
		console.log(config.APP_NAME + ' Node app is running at localhost:' + config.PORT);
	}
});

// register a common exception handler to avoid server crash/shutdown.
process.on('uncaughtException', function (err) {
	console.log('root index.js: uncaughtException', err.toString());
});
