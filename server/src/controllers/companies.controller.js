
'use strict';

// deps

// app modules
const respond = require('../shared/respond');

/* exports */
exports.getAll = getAll;


/* function declarations */

// gets all companies
function getAll(req, res) {
	respond.withSuccess(res, {
		companies: [],
	});
}
