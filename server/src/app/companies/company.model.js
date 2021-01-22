'use strict';

// deps
const { databaseService } = require('../shared/services/database');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird'); // TODO review what is this for ?

// locals
const Schema = mongoose.Schema;

const schemaConfig = {
	collectionName: 'companies'
};

let schemaModel = {
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
	persons: {
		type: Array,
		required: true,
		default: [] // TODO add schema restriction for person model. check general.model.ts file of FE. for IPersonRaw
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

module.exports = mongoose.model(schemaConfig.collectionName, companiesSchema);
