'use strict';

// deps
import mongoose from 'mongoose';
import bluebird from 'bluebird';
mongoose.Promise = bluebird; // TODO review what is this for ?

// app modules
import databaseService from '../../shared/services/database.js';

// locals
const Schema = mongoose.Schema;

const schemaConfig = {
	collectionName: `contracts`
};

let schemaModel = {
	doctorId: {
		type: Number,
		required: true,
	},
	status: {
		type: Number,
		required: true
	},
	amount: {
		type: Number,
		required: true,
		trim: true,
	},
	commission: {
		type: Number,
		required: true,
	},
	startDate: {
		type: Date,
		required: true
	},
	endDate: {
		type: Date,
		required: true
	}

	// rest of fields to be added by databaseService.js.
	// e.g. id, createdOn, createdBy, lastUpdatedOn, lastUpdatedBy, etc.
};

// extend schema model for common fields.
databaseService.schemaSetupCommonFields(schemaModel);
// console.log('schema: complete:', schemaConfig.collectionName, ':', schemaModel);

const contractsSchema = new Schema(schemaModel);

// TODO review this - should we initialize it on every schema ?
// initialize autoIncrement module.
databaseService.initializeAutoIncrement();

databaseService.schemaApplyAutoIncrement(contractsSchema, schemaConfig.collectionName);

export default mongoose.model(schemaConfig.collectionName, contractsSchema);
