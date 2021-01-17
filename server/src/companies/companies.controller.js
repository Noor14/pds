
'use strict';

// deps

// app modules
const respond = require('../shared/services/respond');
const { connectDB } = require('../shared/services/mongodbConnect');
/* exports */
exports.getAll = getAll;


/* function declarations */

// gets all companies
async function getAll(req, res) {
	const db = await connectDB();
	const data = await db
	  .collection('companies')
	  .find({})
	  .toArray();
	respond.withSuccess(res, {
		companies: data,
	});
}
