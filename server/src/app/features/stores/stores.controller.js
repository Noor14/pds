'use strict';

// deps

// app modules
import respond from '../../shared/services/respond.js';
import databaseService from '../../shared/services/database.js';
import storesService from './stores.service.js';
import Store from './store.model.js';

// local
const controllerConfig = {
	entityNameSingle: `Store`,
	entityNameMany: `Stores`,
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
	const storeData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForCreate(req, storeData);

	const data = new Store(storeData);
	data.save((error, newStore) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be created.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		newStore = storesService.fillInAdditionalFieldsForStore(newStore);

		respond.withSuccess(res, {
			store: newStore
		});
	})
}

// updates the existing item
async function updateOne(req, res) {
	const storeData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForUpdate(req, storeData);

	Store.findOneAndUpdate({ id: { $eq: storeData.id } }, storeData, { new:  true }, (error, updatedStore) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be updated.`, error);
			return;
		}

		// TODO - review if we should inject in server generated fields ?

		// fill in eval / aggregate based fields.
		updatedStore = storesService.fillInAdditionalFieldsForStore(updatedStore);

		respond.withSuccess(res, {
			store: updatedStore
		});
	})
}

// deletes target item by id
async function deleteOne(req, res) {
	Store.findOneAndDelete({ id: { $eq: req.params.id } }, (error, store) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be deleted.`, error);
		}

		// fill in eval / aggregate based fields.
		// no need here.
		// store = storesService.fillInAdditionalFieldsForStore(store);

		respond.withSuccess(res, {
			store: store
		});
	});
}

// gets target item by id
async function getOne(req, res) {
	Store.findOne({ id: { $eq: req.params.id } }, (error, store) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be retrieved.`, error);
		}

		// fill in eval / aggregate based fields.
		store = storesService.fillInAdditionalFieldsForStore(store);

		respond.withSuccess(res, {
			store: store
		});
	});
}

// gets all items
async function getList(req, res) {
	Store.find({}, (error, stores) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameMany} could not be retrieved.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		stores = stores.map(storesService.fillInAdditionalFieldsForStore);

		respond.withSuccess(res, {
			stores: stores
		});
	})
}
