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
	collectionName: `orders`
};

let schemaModel = {
	name: {
		type: String,
		required: true,
		trim: true
	},
	status: {
		type: String,
		required: true,
		trim: true
	},
	contact: {
		type: Number,
		required: true,
		trim: true
	},
	amount: {
		type: Number,
		required: true,
		trim: true
	}


	// rest of fields to be added by databaseService.js.
	// e.g. id, createdOn, createdBy, lastUpdatedOn, lastUpdatedBy, etc.
};

// extend schema model for common fields.
databaseService.schemaSetupCommonFields(schemaModel);
// console.log('schema: complete:', schemaConfig.collectionName, ':', schemaModel);

const ordersSchema = new Schema(schemaModel);

// TODO review this - should we initialize it on every schema ?
// initialize autoIncrement module.
databaseService.initializeAutoIncrement();

databaseService.schemaApplyAutoIncrement(ordersSchema, schemaConfig.collectionName);

export default mongoose.model(schemaConfig.collectionName, ordersSchema);
