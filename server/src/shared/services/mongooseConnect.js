'use strict';

// deps
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

// app modules
const environment = require('../../../environments/environment');

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
			uri: `${environment.database.baseURI}/${verticalDBName}?retryWrites=true&w=majority`,
		};
	}
}

// exports
const mongooseConnectService = new MongooseConnectService();
module.exports = { mongooseConnectService };
