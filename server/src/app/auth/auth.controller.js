'use strict';

// deps
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';

// app modules
import UserBlackList from '../users/usersBlackList.model.js';
import User from '../users/user.model.js';
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

		// proceed to handle success.
		const accessToken = jwt.sign(user.toJSON(), process.env.SECRET_TOKEN, { expiresIn: '2d' });

		// remove sensitive data from user model.
		user.password = null;

		respond.withSuccess(res, {
			user: user,
			accessToken: accessToken,
		});
	});
}

async function logout(req, res) {
	let token = req.headers['authorization'];
	if (token && token.startsWith('Bearer')) {
		token = token.split(' ').pop();
	}

	const data = new UserBlackList({token});
	data.save((error, newToken) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} logout failed.`, error); // TODO improve the message.
		}

		// proceed to handle success.
		respond.withSuccess(res, {
			message: `${controllerConfig.entityNameSingle} Logged out successfully.`
		});
	})
}
