'use strict';

// deps
import mongoose from 'mongoose';
import bluebird from 'bluebird';
mongoose.Promise = bluebird;

// app modules
import environment from '../../../environments/environment.js';

// locals
class MongooseConnectService {

	constructor() {

	}

	// once only - init the mongodb Atlas connection.
	initialize() {
		console.log('MongooseConnectService: initialize:');

		const verticalDBInfo = this.generateVerticalDBInfo({}); // generateVerticalDBInfo(request);

		mongoose.connect(verticalDBInfo.uri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		})

		// mongoose.connection.on('connecting',  info => {
		// 	console.error('MongooseConnectService: initialize: connecting...');
		// });

		mongoose.connection.on('connected',  () => {
			console.error('MongooseConnectService: initialize: DB connection Successful !');
		});

		mongoose.connection.on('error',  err => {
			console.error('MongooseConnectService: initialize: DB connection FAILED ! ' + err);

			// TODO review how to avoid shutting down the server. e.g. email admin, retry (3) or show maintenance page, etc.
			process.exit(-1);
		});
	}

	generateVerticalDBInfo (request) {
		// TODO - implement vertical specific db connections, based of the request vertical/origin/client we choose which DB to use.
		// const verticalDBName = request.vertical.credentials.mongoDbAtlas.databaseName;
		const verticalDBName = 'demo';

		return {
			verticalDBName,

			// for nodejs driver 3.6 latest
			// uri: `${environment.database.baseURI}/${verticalDBName}?retryWrites=true&w=majority`,

			// TODO review, why latest 3.6 stopped working for Shahzad's ubuntu
			// for nodejs driver 2.2 or later.
			uri: `${environment.database.baseURI}/${verticalDBName}?ssl=true&replicaSet=atlas-wu0oaq-shard-0&authSource=admin&retryWrites=true&w=majority`,
		};
	}
}

const mongooseConnectService = new MongooseConnectService();
export default mongooseConnectService;
