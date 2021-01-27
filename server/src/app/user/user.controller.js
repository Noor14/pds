"use strict";

import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import userBlackList from './userBlackList.model.js';
import databaseService from '../shared/services/database.js';
import respond from '../shared/services/respond.js';


export async function UserLogin(req, res){
 
 const user = {name: req.body.username};
 const accessToken = jwt.sign(user, process.env.SECRET_TOKEN)
 res.json({accessToken})

}

export async function UserLogout(req, res){
 
   // creates a new item
    let token = req.headers['authorization'];
    if(token && token.startsWith('Bearer')){
        token = token.split(' ').pop();
    }

	// add and protect common fields
	databaseService.apiFillInFieldsForCreate(req, {token});

	const data = new userBlackList({token});
	data.save((error, newToken) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be created.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		respond.withSuccess(res, {
			blackListToken: newToken
		});
	})
}
