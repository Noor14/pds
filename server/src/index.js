/**
 * Main application
 */

'use strict';

// node core modules dependencies
// ...

// third-party dependencies
import express from 'express';
import morganLogger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

// app modules
import appRoutes from './app/features/features.routes.js';
import authRouter from './app/auth/auth.routes.js';
import mongooseConnectService from './app/shared/services/mongooseConnect.js';
import corsOptionsDelegate from './app/middlewares/cors.js';
import { authenticateToken } from './app/middlewares/authenticate.js';

/* locals */
const config = {
	PORT: 3402,
	SERVE_DIR: '../clients/dist',
	//HOME_PAGE_REDIRECT: '/index.html',
	APP_NAME: 'QASWA DS',
};

/* initialization */
const app = express();

// initialize DB connection to mongodb Atlas, via mongoose.
mongooseConnectService.initialize();

/* middlewares */
// app.use(morganLogger('combined', {}));
app.use(morganLogger('tiny', {}));

app.use(bodyParser.urlencoded({ extended: false })) // // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

// serve FE app files
// TODO implement path module to use "go up" for "../client"
app.use(express.static(config.SERVE_DIR));

// app APIs routes
app.get('/', (req, res) => {
	// TODO - for PROD, server shouldn't respond on root route. for security.
	res.send('Server is running.');
});

/* core app routes */
const apiRouter = express.Router();
apiRouter.use('/auth', authRouter);
apiRouter.use('/app', authenticateToken, appRoutes);

app.use('/api', cors(corsOptionsDelegate), apiRouter);

// appRoutes.default(app);

// 404 routes responder
app.use((req, res) => {
	console.log('404 init.');
	res.status(404).sendFile(path.resolve() + '/server/src/app/shared/views/404.html');
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
