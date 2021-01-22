'use strict';

// deps

// app modules
import respond from '../shared/services/respond.js';
import databaseService from '../shared/services/database.js';
import companiesService from './companies.service.js';
import Company from './company.model.js';

// local
const controllerConfig = {
	entityNameSingle: `Company`,
	entityNameMany: `Companies`,
};

/* exports */
export {
	addOne,
	updateOne,
	deleteOne,
	getOne,
	getList
};


/* function declarations */

// creates a new item
async function addOne(req, res) {
	const companyData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForCreate(req, companyData);

	const data = new Company(companyData);
	data.save((error, newCompany) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be created.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		newCompany = companiesService.fillInAdditionalFieldsForCompany(newCompany);

		respond.withSuccess(res, {
			company: newCompany
		});
	})
}

// updates the existing item
async function updateOne(req, res) {
	const companyData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForUpdate(req, companyData);

	Company.findOneAndUpdate({ id: { $eq: companyData.id } }, companyData, { new:  true }, (error, updatedCompany) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be updated.`, error);
			return;
		}

		// TODO - review if we should inject in server generated fields ?

		// fill in eval / aggregate based fields.
		updatedCompany = companiesService.fillInAdditionalFieldsForCompany(updatedCompany);

		respond.withSuccess(res, {
			company: updatedCompany
		});
	})
}

// deletes target item by id
async function deleteOne(req, res) {
	Company.findOneAndDelete({ id: { $eq: req.params.id } }, (error, company) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be deleted.`, error);
		}

		// fill in eval / aggregate based fields.
		// no need here.
		// company = companiesService.fillInAdditionalFieldsForCompany(company);

		respond.withSuccess(res, {
			company: company
		});
	});
}

// gets target item by id
async function getOne(req, res) {
	Company.findOne({ id: { $eq: req.params.id } }, (error, company) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be retrieved.`, error);
		}

		// fill in eval / aggregate based fields.
		company = companiesService.fillInAdditionalFieldsForCompany(company);

		respond.withSuccess(res, {
			company: company
		});
	});
}

// gets all items
async function getList(req, res) {
	Company.find({}, (error, companies) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameMany} could not be retrieved.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		companies = companies.map(companiesService.fillInAdditionalFieldsForCompany);

		respond.withSuccess(res, {
			companies: companies
		});
	})
}
