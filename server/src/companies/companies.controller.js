
'use strict';

// deps

// app modules
const respond = require('../shared/services/respond');
const { connectDB } = require('../shared/services/mongodbConnect');

// locals
const config = {
	collectionName: `companies`
};

/* exports */
module.exports = {
	getAll,
	getOne,
};


/* function declarations */

// gets all companies
async function getAll(req, res) {
	// console.log('companies: getAll');

	const db = await connectDB(req);
	// console.log('companies: getAll: connectDB done:');

	const data = await db
	  .collection(config.collectionName)
	  .find({})
	  .toArray();

	respond.withSuccess(res, {
		companies: data,
	});
}

// gets target company info by id
async function getOne(req, res) {
	// console.log('companies: getOne');

	const db = await connectDB(req);
	// console.log('companies: getOne: connectDB done:');

	const data = await db
		.collection(config.collectionName)
		.find({id: 'foo'})
		.toArray();

	respond.withSuccess(res, {
		companies: data,
	});
}
