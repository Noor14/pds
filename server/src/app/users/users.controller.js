"use strict";

import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import userBlackList from './usersBlackList.model.js';
import User from './user.model.js';
import databaseService from '../shared/services/database.js';
import respond from '../shared/services/respond.js';

/* exports */
export {
	addOne,
	updateOne,
	deleteOne,
	getOne,
	getList,
	UserLogin,
	UserLogout
};


/* function declarations */

// creates a new item
async function addOne(req, res) {
	const userData = req.body;
	// add and protect common fields
	databaseService.apiFillInFieldsForCreate(req, userData);

	const data = new User(userData);
	data.save((error, newUser) => {
		if (error) {
			respond.withFailure(res, 'user-abstract could not be created.', error);
			return;
		}
		respond.withSuccess(res, {
			user: newUser
		});
	})
}

// updates the existing item
async function updateOne(req, res) {
	const userData = req.body;
	// add and protect common fields
	databaseService.apiFillInFieldsForUpdate(req, userData);

	User.findOneAndUpdate({ id: { $eq: userData.id } }, userData, { new:  true }, (error, updatedUser) => {
		if (error) {
			respond.withFailure(res, 'user-abstract could not be updated.', error);
			return;
		}
		respond.withSuccess(res, {
			user: updatedUser
		});
	})
}

// deletes target item by id
async function deleteOne(req, res) {
	User.findOneAndDelete({ id: { $eq: req.params.id } }, (error, user) => {
		if (error) {
			respond.withFailure(res, 'user-abstract could not be deleted.', error);
		}
		respond.withSuccess(res, {user});
	});
}

// gets target item by id
async function getOne(req, res) {
	User.findOne({ id: { $eq: req.params.id } }, (error, user) => {
		if (error) {
			respond.withFailure(res, 'user-abstract could not be retrieved.', error);
			return
		}
		else if(!user){
			respond.withFailure(res, 'user-abstract could not be retrieved.', 'Fail');
			return;
		}
		respond.withSuccess(res, {user});
	});
}

// gets all items
async function getList(req, res) {
	User.find({}, (error, users) => {
		if (error) {
			respond.withFailure(res, 'users could not be retrieved.', error);
			return;
		}
		respond.withSuccess(res, {users});
	})
}

async function UserLogin(req, res){
 User.findOne({
	 $and: [{ 
	 username: { $eq: req.body.username },
	 password: { $eq: req.body.password }
 }]
}, (err, user)=>{
	if(err){
		respond.withFailure(res, 'invalid credential', error);
		return;
	}
	else if(!user){
		respond.withFailure(res, 'invalid credential', 'Fail');
		return;
	}
	const accessToken = jwt.sign(user && user.toJSON(), process.env.SECRET_TOKEN, { expiresIn: '2d' })
	res.json({accessToken})
})

}

async function UserLogout(req, res){
    let token = req.headers['authorization'];
    if(token && token.startsWith('Bearer')){
        token = token.split(' ').pop();
    }
	const data = new userBlackList({token});
	data.save((error, newToken) => {
		if (error) {
			respond.withFailure(res, 'user-abstract could not be logout.', error);
			return;
		}
		respond.withSuccess(res, {
			logout: 'Logout Successfully'
		});
	})
}
