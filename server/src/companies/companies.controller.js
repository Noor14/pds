'use strict';

// deps

// app modules
const respond = require('../shared/services/respond');
const { databaseService } = require('../shared/services/database');
const company = require('./company.model');

// local
const controllerConfig = {
	entityNameSingle: `Company`,
	entityNameMany: `Companies`,
};

/* exports */
module.exports = {
	addOne,
	updateOne,
	deleteOne,
	getOne,
	getList
};


/* function declarations */

// creates a new item
async function addOne(req, res) {
	const item = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForCreate(req, item);

	const data = new company(req.body);
	data.save((error, newCompany) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be created.`, error);
			return;
		}

		respond.withSuccess(res, {
			company: newCompany
		});
	})
}

// updates the existing item
async function updateOne(req, res) {
	const item = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForUpdate(req, item);

	data.findOneAndUpdate({ id: { $eq: req.params.id } }, item, { new:  true }, (error, updatedCompany) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be updated.`, error);
			return;
		}

		respond.withSuccess(res, {
			company: updatedCompany
		});
	})
}

// deletes target item by id
async function deleteOne(req, res) {
	company.findOneAndDelete({ id: { $eq: req.params.id } }, (error, company) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be deleted.`, error);
		}

		respond.withSuccess(res, {
			company: company
		});
	});
}

// gets target item by id
async function getOne(req, res) {
	company.findOne({ id: { $eq: req.params.id } }, (error, company) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be retrieved.`, error);
		}

		respond.withSuccess(res, {
			company: company
		});
	});
}

// gets all items
async function getList(req, res) {
	company.find({}, (error, companies) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameMany} could not be retrieved.`, error);
			return;
		}

		respond.withSuccess(res, {
			companies: companies
		});
	})
}
