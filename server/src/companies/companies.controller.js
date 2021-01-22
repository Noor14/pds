'use strict';

// deps

// app modules
const respond = require('../shared/services/respond');
const company = require('./company.model');

/* exports */
module.exports = {
	getAll,
	getOne,
	create
};


/* function declarations */

// create company
async function create(req, res) {
	const data = new company(req.body)
	data.save((error, response) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, 'record not inserted', error);
			return;
		}

		respond.withSuccess(res, {
			companies: response
		});
	})
}

// gets all companies
async function getAll(req, res) {
	company.find({}, (error, response) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, 'record not inserted', error);
			return;
		}

		respond.withSuccess(res, {
			companies: response
		});
	})
}

// gets target company info by id
async function getOne(req, res) {
	company.findOne({id: {$eq: req.params.id}}, (error, response) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, 'record not searchable', 'fail');
		}

		respond.withSuccess(res, {
			companies: response
		});
	});
}
