'use strict';

// deps
const MongoClient = require('mongodb').MongoClient;

// app modules
const environment = require('../../../environments/environment');

// locals
let connectionPromise = null;

// exports
exports.connectDB = connectDB;

/* functions declarations */

// generates vertical specific
const generateVerticalDBInfo = (request) => {
	const verticalDBName = request.vertical.credentials.mongoDbAtlas.databaseName;

	return {
		verticalDBName,
		uri: `${environment.database.baseURI}/${verticalDBName}?retryWrites=true&w=majority`,
	};
};

// TODO implement vertical specific DB connection.
async function connectDB(request) {

	// case: connection to DB is already in progress.
  if (connectionPromise) return connectionPromise;

  const verticalDBInfo = generateVerticalDBInfo(request);

  // case: proceed to perform the connection to DB
  connectionPromise = new Promise((resolve, reject) => {
	  console.log('connectDB: connecting...', verticalDBInfo);

    const client = new MongoClient(verticalDBInfo.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // TODO review if this ever runs to true? because line#22 already has the cache serving.
    // case: connection settled. proceed to awaiting requests.
    if (client.isConnected()) {
    	console.log('connectDB: already isConnected !');
      return resolve(client);
    }

    // case: proceed to request to connect. respond requests with resolve or reject
    client
	    .connect()
	    .then(() => {
		    console.log('connectDB: connection: successful.');
	      return resolve(client.db(verticalDBInfo.verticalDBName));
	    })
	    .catch(err => {
		    console.log('connectDB: connection: failure.', err);
	      reject(err);
	    });
  });

  return connectionPromise;
}
