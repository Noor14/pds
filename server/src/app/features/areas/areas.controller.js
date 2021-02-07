'use strict';

// deps

// app modules
import respond from '../../shared/services/respond.js';
import databaseService from '../../shared/services/database.js';
import areasService from './areas.service.js';
import Area from './area.model.js';

// local
const controllerConfig = {
	entityNameSingle: `Area`,
	entityNameMany: `Areas`,
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
	const areaData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForCreate(req, areaData);

	const data = new Area(areaData);
	data.save((error, newArea) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be created.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		newArea = areasService.fillInAdditionalFieldsForArea(newArea);

		respond.withSuccess(res, {
			area: newArea
		});
	})
}

// updates the existing item
async function updateOne(req, res) {
	const areaData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForUpdate(req, areaData);

	Area.findOneAndUpdate({ id: { $eq: req.params.id } }, areaData, { new:  true }, (error, updatedArea) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be updated.`, error);
			return;
		}

		// TODO - review if we should inject in server generated fields ?

		// fill in eval / aggregate based fields.
		updatedArea = areasService.fillInAdditionalFieldsForArea(updatedArea);

		respond.withSuccess(res, {
			area: updatedArea
		});
	})
}

// deletes target item by id
async function deleteOne(req, res) {
	Area.findOneAndDelete({ id: { $eq: req.params.id } }, (error, area) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be deleted.`, error);
		}

		// fill in eval / aggregate based fields.
		// no need here.
		// area = areasService.fillInAdditionalFieldsForArea(area);

		respond.withSuccess(res, {
			area: area
		});
	});
}

// gets target item by id
async function getOne(req, res) {
	Area.findOne({ id: { $eq: req.params.id } }, (error, area) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be retrieved.`, error);
		}

		// fill in eval / aggregate based fields.
		area = areasService.fillInAdditionalFieldsForArea(area);

		respond.withSuccess(res, {
			area: area
		});
	});
}

// gets all items
async function getList(req, res) {
	Area.find({}, (error, areas) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameMany} could not be retrieved.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		areas = areas.map(areasService.fillInAdditionalFieldsForArea);

		respond.withSuccess(res, {
			areas: areas
		});
	})
}
