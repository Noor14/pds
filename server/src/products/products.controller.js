
'use strict';

// deps

// app modules
const respond = require('../shared/services/respond');

/* exports */
exports.getAll = getAll;


/* function declarations */

// gets all companies
function getAll(req, res) {
	respond.withSuccess(res, {
		products: [],
	});
}
