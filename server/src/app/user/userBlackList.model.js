// deps
import mongoose from 'mongoose';
import bluebird from 'bluebird';
mongoose.Promise = bluebird; // TODO review what is this for ?
import databaseService from '../shared/services/database.js';

// locals
const Schema = mongoose.Schema;

const schemaConfig = {
	collectionName: `blackListUser`
};
const schemaModel = {
	token: {
		type: String,
		required: true,
		trim: true,
		unique: true
	}
};
databaseService.schemaSetupCommonFields(schemaModel);

// extend schema model for common fields.
const blackListUser = new Schema(schemaModel);

// TODO review this - should we initialize it on every schema ?
// initialize autoIncrement module.
databaseService.initializeAutoIncrement();

databaseService.schemaApplyAutoIncrement(blackListUser, schemaConfig.collectionName);

export default mongoose.model(schemaConfig.collectionName, blackListUser);