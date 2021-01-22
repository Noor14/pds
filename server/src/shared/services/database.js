
// deps
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

// locals
const { serverSettings } = require('../../../config/serverSettings');

class DatabaseService {

	constructor(props) {

	}

	// one time only - initialize the plugin after connection.
	initializeAutoIncrement() {
		autoIncrement.initialize(mongoose.connection);
	}

	apiFillFieldsForInsert(req) {
		console.log('apiFillFieldsForInsert:');
	}

	apiFillFieldsForUpdate(req) {
		console.log('apiFillFieldsForUpdate:');
	}

	// sets up common fields for almost every entity to be created in app. consistency in all collections.
	schemaSetupCommonFields(schemaModel) {
		// console.log('schemaSetupCommonFields:', schemaModel);

		return Object.assign(schemaModel,{
			id: {
				type: Number,
				unique: true
			},

			createdBy: Number, // id of user/admin
			createdOn: {
				type: Date,
				required: true,
				default: Date.now
			},

			lastUpdatedBy: Number, // id of user/admin
			lastUpdatedOn: {
				type: Date,
			},

			// any other common fields to be added here below.

		});
	}

	// sets up auto increment against given collection new inserts.
	schemaApplyAutoIncrement(schema, collectionName) {
		console.log('schemaAddIncrement:', collectionName);

		schema.plugin(autoIncrement.plugin, {
			model: collectionName,
			field: 'id',
			startAt: serverSettings.db.idStartAt,
			incrementBy: 1
		});
	}
}

const databaseService = new DatabaseService();
module.exports = { databaseService };
