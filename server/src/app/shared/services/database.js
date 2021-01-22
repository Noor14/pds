
// deps
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// locals
import serverSettings from '../../../config/serverSettings.js';

class DatabaseService {
	createRestrictedFields = [
		'id',

		// already to be overwritten.
		// 'createdBy',
		// 'lastUpdatedOn',
		// 'lastUpdatedBy',
		// 'lastUpdatedOn',
	];
	updateRestrictedFields = [
		'id',
		'createdBy',
		'createdOn',

		// already to be overwritten.
		// 'lastUpdatedBy',
		// 'lastUpdatedOn',
	];

	constructor(props) {

	}

	// one time only - initialize the plugin after connection.
	initializeAutoIncrement() {
		autoIncrement.initialize(mongoose.connection);
	}

	apiFillInFieldsForCreate(req, model) {
		console.log('apiFillInFieldsForCreate:', model);

		// protect from writing these.
		this.createRestrictedFields.forEach(fieldName => {
			if (model[fieldName]) delete model[fieldName];
		});

		model.createdBy = req.user.id;
		model.createdOn = Date.now();
		model.lastUpdatedBy = null;
		model.lastUpdatedOn = null;
	}

	apiFillInFieldsForUpdate(req, model) {
		console.log('apiFillInFieldsForUpdate:', model);

		// protect from updating / modifying these.
		this.updateRestrictedFields.forEach(fieldName => {
			if (model[fieldName]) delete model[fieldName];
		});

		model.lastUpdatedBy = req.user.id;
		model.lastUpdatedOn = Date.now();
	}

	// sets up common fields for almost every entity to be created in app. consistency in all collections.
	schemaSetupCommonFields(schemaModel) {
		// console.log('schemaSetupCommonFields:', schemaModel);

		return Object.assign(schemaModel,{

			// this one is not "_id". this "id" is being managed by mongoose-auto-increment module.
			id: {
				type: Number,
				unique: true,
				required: false,
			},

			createdBy: Number, // id of user/admin
			createdOn: {
				type: Date,
				required: true,
				default: Date.now,
			},

			lastUpdatedBy: Number, // id of user/admin
			lastUpdatedOn: {
				type: Date,
				required: false,
				default: null,
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
export default databaseService;
