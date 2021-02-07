'use strict';

// deps
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

// app modules
import ActiveSession from '../auth/active-session.model.js';
import respond from '../shared/services/respond.js';

// locals
const config = {
	adminTypes: [10, 210] // team admin, and super admin.
};

/* function declarations */

// util - blocks the access and exit request with unauthorized status and message.
function _blockAccessAndExit(res, reason) {
	respond.withFailure(res, [reason || `No or Expired login session.`], null, 401);
}

// validates user's active login session before allowing to access target APIs.
export function authActiveSession(req, res, next) {
	const authHeader = req.headers['authorization'];

	// case: skip if no auth header provided
	if (!authHeader || !authHeader.startsWith('Bearer')) {
		return _blockAccessAndExit(res);
	}

	const accessToken = authHeader.split(' ').pop();

	// first: validate provided token's life.. to proceed or exit.
	jwt.verify(accessToken, process.env.SECRET_TOKEN, (err, loggedInUser) => {

		// case: expired session or invalid token.
		if (err) {
			return _blockAccessAndExit(res);
		}

		// second: check if it was not destroyed via /logout, before it could get expired.

		ActiveSession.findOne({ token: { $eq: accessToken } }, (error, activeSession) => {

			// case: DB error
			if (error) {
				// respond.withFailure(res, `Something went wrong, Please try again.`, error);
				return _blockAccessAndExit(res, `Something went wrong, Please try again.`);
			}

			// case: no item found in DB.
			if (!activeSession) {
				return _blockAccessAndExit(res);
			}

			// hurray ! proceed to inject in the logged-in user info into "request" object.
			req.loggedInUser = loggedInUser;

			// proceed to next middle towards target API.
			next();
		});

	});
}

// verifies the type of loggedIn user to be an admin.
export function authIsAdmin(req, res, next) {
	const loggedInUser = req.loggedInUser;

	// case: skip if no auth header provided
	if (config.adminTypes.indexOf(loggedInUser.type) === -1) {
		return _blockAccessAndExit(res, `Admin access required for this API.`);
	}

	// hurray ! proceed to next middle towards target API.
	next();
}
