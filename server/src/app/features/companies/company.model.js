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
	collectionName: `companies`
};

let schemaModel = {
	companyId: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
		trim: true
	},
	type: {
		type: Number,
		required: true,
		trim: true
	},
	startedSince: {
		type: Date,
		required: true,
	},
	contact: {
		type: String,
		required: true,
		trim: true
	},

	// rest of fields to be added by databaseService.js.
	// e.g. id, createdOn, createdBy, lastUpdatedOn, lastUpdatedBy, etc.
};

// extend schema model for common fields.
databaseService.schemaSetupCommonFields(schemaModel);
// console.log('schema: complete:', schemaConfig.collectionName, ':', schemaModel);

const companiesSchema = new Schema(schemaModel);

// TODO review this - should we initialize it on every schema ?
// initialize autoIncrement module.
databaseService.initializeAutoIncrement();

databaseService.schemaApplyAutoIncrement(companiesSchema, schemaConfig.collectionName);

export default mongoose.model(schemaConfig.collectionName, companiesSchema);
