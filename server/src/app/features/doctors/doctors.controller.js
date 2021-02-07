'use strict';

// deps

// app modules
import respond from '../../shared/services/respond.js';
import databaseService from '../../shared/services/database.js';
import doctorsService from './doctors.service.js';
import Doctor from './doctor.model.js';

// local
const controllerConfig = {
	entityNameSingle: `Doctor`,
	entityNameMany: `Doctors`,
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
	const doctorData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForCreate(req, doctorData);

	const data = new Doctor(doctorData);
	data.save((error, newDoctor) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be created.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		newDoctor = doctorsService.fillInAdditionalFieldsForDoctor(newDoctor);

		respond.withSuccess(res, {
			doctor: newDoctor
		});
	})
}

// updates the existing item
async function updateOne(req, res) {
	const doctorData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForUpdate(req, doctorData);

	Doctor.findOneAndUpdate({ id: { $eq: doctorData.id } }, doctorData, { new:  true }, (error, updatedDoctor) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be updated.`, error);
			return;
		}

		// TODO - review if we should inject in server generated fields ?

		// fill in eval / aggregate based fields.
		updatedDoctor = doctorsService.fillInAdditionalFieldsForDoctor(updatedDoctor);

		respond.withSuccess(res, {
			doctor: updatedDoctor
		});
	})
}

// deletes target item by id
async function deleteOne(req, res) {
	Doctor.findOneAndDelete({ id: { $eq: req.params.id } }, (error, doctor) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be deleted.`, error);
		}

		// fill in eval / aggregate based fields.
		// no need here.
		// doctor = doctorsService.fillInAdditionalFieldsForDoctor(doctor);

		respond.withSuccess(res, {
			doctor: doctor
		});
	});
}

// gets target item by id
async function getOne(req, res) {
	Doctor.findOne({ id: { $eq: req.params.id } }, (error, doctor) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be retrieved.`, error);
		}

		// fill in eval / aggregate based fields.
		doctor = doctorsService.fillInAdditionalFieldsForDoctor(doctor);

		respond.withSuccess(res, {
			doctor: doctor
		});
	});
}

// gets all items
async function getList(req, res) {
	Doctor.find({}, (error, doctors) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameMany} could not be retrieved.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		doctors = doctors.map(doctorsService.fillInAdditionalFieldsForDoctor);

		respond.withSuccess(res, {
			doctors: doctors
		});
	})
}
