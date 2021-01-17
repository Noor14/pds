
'use strict';

// deps

// app modules
const respond = require('../shared/services/respond');
const productsRawMock = require('../../mock/products.mock');

/* exports */
module.exports = {
	getAll,
	getOne,
};


/* function declarations */

// gets list of items from the collection
function getAll(req, res) {
	console.log('products: getAll:');
	const data = {};

	// TODO implement DB lookup
	data.products = productsRawMock;

	respond.withSuccess(res, data);
}

// gets target item from the collection
function getOne(req, res) {
	console.log('products: getOne:');
	const data = {};

	// TODO implement DB lookup
	data.product = productsRawMock[0];

	respond.withSuccess(res, data);
}
