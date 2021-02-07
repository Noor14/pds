// deps
import mongoose from 'mongoose';
import bluebird from 'bluebird';
mongoose.Promise = bluebird; // TODO review what is this for ?
import databaseService from '../shared/services/database.js';

// locals
const Schema = mongoose.Schema;

const schemaConfig = {
	collectionName: `activeSessions`,
};

const schemaModel = {
	token: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},

	// nothing else is needed. token has the encrypted info of target user.
};

const ActiveSession = new Schema(schemaModel);
export default mongoose.model(schemaConfig.collectionName, ActiveSession);
