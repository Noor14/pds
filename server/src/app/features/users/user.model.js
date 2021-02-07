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
	collectionName: `users`
};

let schemaModel = {
	firstName: {
		type: String,
        trim: true,
		required: true,
	},
	lastName: {
		type: String,
        trim: true,
		required: true,
	},
	contacts:{
		type: Array,
		// required: true,
		default: []
	},
	username: {
		type: String,
        trim: true,
		required: true,
        lowercase: true,
		unique: true,
		// validate: [validateEmail, 'Enter a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid email address']
	},
	password:{
		type: String,
		trim: true,
		required: true
	},
	type: {
		type: Number,
		required: true,
		trim: true
	},
	areaId: {
		type: Number,
		required: true,
		trim: true
	},
	address: {
		type: String,
		trim: true
	},
	lastLogin: Date
};

// extend schema model for common fields.
databaseService.schemaSetupCommonFields(schemaModel);

const userSchema = new Schema(schemaModel);

// TODO review this - should we initialize it on every schema ?
// initialize autoIncrement module.
databaseService.initializeAutoIncrement();

databaseService.schemaApplyAutoIncrement(userSchema, schemaConfig.collectionName);

export default mongoose.model(schemaConfig.collectionName, userSchema);
