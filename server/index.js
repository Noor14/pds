/**
 * Main application
 */

'use strict';

// node core modules dependencies

// third-party dependencies
const express = require('express');
const morganLogger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

// app modules
const appRoutes = require('./app.routes.js');
const { mongooseConnectService } = require('./src/shared/services/mongooseConnect');

/* locals */
const config = {
	PORT: 3402,
	SERVE_DIR: '../clients/dist',
	//HOME_PAGE_REDIRECT: '/index.html',
	APP_NAME: 'QASWA DS',
	CORS__WHITE_LISTED_ORIGINS: [
		'http://localhost:3400',
		'http://localhost:3401',

		'http://www.qaswads.herokuapp.com',
		'https://www.qaswads.herokuapp.com',
	],
};

/* initialization */
const app = express();

// initialize DB connection to mongodb Atlas, via mongoose.
mongooseConnectService.initialize();

/* middlewares */
// app.use(morganLogger('combined'));
app.use(morganLogger('tiny'));

app.use(bodyParser.urlencoded({ extended: false })) // // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// Enable CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
	res.header('Access-Control-Allow-Credentials', 'true');

	// res.header('Access-Control-Allow-Origin', '*');
	if (config.CORS__WHITE_LISTED_ORIGINS.indexOf(req.headers.origin) >= 0) {
		res.header('Access-Control-Allow-Origin', req.headers.origin);
	}

	next();
});

// serve FE app files
// TODO implement path module to use "go up" for "../client"
app.use(express.static(path.join(__dirname, config.SERVE_DIR)))

// app APIs routes
app.get('/', (req, res) => {
	// TODO - for PROD, server shouldn't respond on root route. for security.
	res.send('Server is running.');
});

app.use('/api', appRoutes.default);
// appRoutes.default(app);

// 404 routes responder
app.use((req, res) => {
	console.log('404 init.');
	res.status(404).sendFile(__dirname + '/src/shared/views/404.html');
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
process.on('uncaughtException', (err) => {
	console.log('root index.js: uncaughtException', err.toString());
});
