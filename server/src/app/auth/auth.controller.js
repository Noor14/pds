'use strict';

// deps
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

// app modules
import ActiveSession from './active-session.model.js';
import User from '../features/users/user.model.js';
import databaseService from '../shared/services/database.js';
import respond from '../shared/services/respond.js';

// local
const controllerConfig = {
	entityNameSingle: `User`,
	entityNameMany: `Users`,
};

/* exports */
export {
	login,
	logout
};


/* function declarations */

async function login(req, res) {
	const userData = req.body;

	User.findOne({
		$and: [{
			username: { $eq: userData.username },
			password: { $eq: userData.password }
		}]
	}, (error, user) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `Failed in finding user.`, error); // TODO improve the message.
		}

		// case: no item found in DB.
		if (!user) {
			respond.withFailure(res, `Invalid username or password.`, null);
			return;
		}

		/* proceed to handle success. */

		// TODO enhance - implement support to extending token's life per every next interaction.
		// generate token to be valid for max 8 hrs.
		const accessToken = jwt.sign(user.toJSON(), process.env.SECRET_TOKEN, { expiresIn: '8h' });

		// check if this token was not discarded via logout.
		// store the active session to later authenticate if it was not discarded via logout by then.
		const session = new ActiveSession({ token: accessToken });
		session.save((error, newToken) => {

			// case: DB error
			if (error) {
				respond.withFailure(res, `Something went wrong, Please try again.`, error); // TODO improve the message.
			}

			// hurray ! proceed to the login session.

			// remove sensitive data from user model.
			user.password = null;

			respond.withSuccess(res, {
				user: user,
				accessToken: accessToken,
			});
		});

		/* background tasks starts here. e.g. noting active session, sms/email notification, etc. */
		// ...

	});
}

// destroys user's current active session, completely.
async function logout(req, res) {
	let accessToken = req.headers['authorization'];
	if (accessToken && accessToken.startsWith('Bearer')) {
		accessToken = accessToken.split(' ').pop();
	}

	ActiveSession.findOneAndDelete({ token: { $eq: accessToken } }, (error, destroyedSession) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} logout failed.`, error);
		}

		// TODO Review - should we expose this info ? probably not !
		// case: no item found in DB.
		// if (!destroyedSession) {
		// 	respond.withFailure(res, `No ${controllerConfig.entityNameSingle}'s active session found to logout.`, null);
		// 	return;
		// }

		respond.withSuccess(res, {
			message: `${controllerConfig.entityNameSingle} Logged out successfully.`
		});
	});
}
