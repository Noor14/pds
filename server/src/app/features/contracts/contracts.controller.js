'use strict';

// deps

// app modules
import respond from '../../shared/services/respond.js';
import databaseService from '../../shared/services/database.js';
import contractsService from './contracts.service.js';
import Contract from './contract.model.js';

// local
const controllerConfig = {
	entityNameSingle: `Contract`,
	entityNameMany: `Contracts`,
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
	const contractData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForCreate(req, contractData);

	const data = new Contract(contractData);
	data.save((error, newContract) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be created.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		newContract = contractsService.fillInAdditionalFieldsForContract(newContract);

		respond.withSuccess(res, {
			contract: newContract
		});
	})
}

// updates the existing item
async function updateOne(req, res) {
	const contractData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForUpdate(req, contractData);

	Contract.findOneAndUpdate({ id: { $eq: req.params.id } }, contractData, { new:  true }, (error, updatedContract) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be updated.`, error);
			return;
		}

		// TODO - review if we should inject in server generated fields ?

		// fill in eval / aggregate based fields.
		updatedContract = contractsService.fillInAdditionalFieldsForContract(updatedContract);

		respond.withSuccess(res, {
			contract: updatedContract
		});
	})
}

// deletes target item by id
async function deleteOne(req, res) {
	Contract.findOneAndDelete({ id: { $eq: req.params.id } }, (error, contract) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be deleted.`, error);
		}

		// fill in eval / aggregate based fields.
		// no need here.
		// contract = contractsService.fillInAdditionalFieldsForContract(contract);

		respond.withSuccess(res, {
			contract: contract
		});
	});
}

// gets target item by id
async function getOne(req, res) {
	Contract.findOne({ id: { $eq: req.params.id } }, (error, contract) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be retrieved.`, error);
		}

		// fill in eval / aggregate based fields.
		contract = contractsService.fillInAdditionalFieldsForContract(contract);

		respond.withSuccess(res, {
			contract: contract
		});
	});
}

// gets all items
async function getList(req, res) {
	Contract.find({}, (error, contracts) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameMany} could not be retrieved.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		contracts = contracts.map(contractsService.fillInAdditionalFieldsForContract);

		respond.withSuccess(res, {
			contracts: contracts
		});
	})
}
