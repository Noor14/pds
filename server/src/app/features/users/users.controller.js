'use strict';

// deps
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

// app modules
import UserBlackList from './usersBlackList.model.js';
import User from './user.model.js';
import databaseService from '../../shared/services/database.js';
import respond from '../../shared/services/respond.js';

// local
const controllerConfig = {
	entityNameSingle: `User`,
	entityNameMany: `Users`,
};

/* exports */
export {
	addOne,
	updateOne,
	deleteOne,
	getOne,
	getList,
};


/* function declarations */

// creates a new item
async function addOne(req, res) {
	const userData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForCreate(req, userData);

	const data = new User(userData);
	data.save((error, newUser) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be created.`, error);
			return;
		}

		respond.withSuccess(res, {
			user: newUser
		});
	})
}

// updates the existing item
async function updateOne(req, res) {
	const userData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForUpdate(req, userData);

	User.findOneAndUpdate({ id: { $eq: userData.id } }, userData, {new: true}, (error, updatedUser) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be updated.`, error);
			return;
		}

		// case: no item found in DB.
		if (!updatedUser) {
			respond.withFailure(res, `No ${controllerConfig.entityNameSingle} found with given criteria to update.`, null);
			return;
		}

		respond.withSuccess(res, {
			user: updatedUser
		});
	})
}

// deletes target item by id
async function deleteOne(req, res) {
	User.findOneAndDelete( { id: { $eq: req.params.id } }, (error, user) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be deleted.`, error);
		}

		// case: no item found in DB.
		if (!user) {
			respond.withFailure(res, `No ${controllerConfig.entityNameSingle} found with given criteria to delete.`, null);
			return;
		}

		respond.withSuccess(res, {
			user: user
		});
	});
}

// gets target item by id
async function getOne(req, res) {
	User.findOne({ id: { $eq: req.params.id } }, (error, user) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be retrieved.`, error);
		}

		// case: no item found in DB.
		if (!user) {
			respond.withFailure(res, `No ${controllerConfig.entityNameSingle} found with given criteria.`, null);
			return;
		}

		respond.withSuccess(res, {
			user: user
		});
	});
}

// gets all items
async function getList(req, res) {
	User.find({}, (error, users) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameMany} could not be retrieved.`, error);
			return;
		}

		// Note: when no records found, it should still be success response.
		respond.withSuccess(res, {
			users: users
		});
	})
}
