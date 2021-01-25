/**
 * Main application routes
 */

'use strict';

// deps
import express from 'express';

// app modules
import demoVertical from './src/verticals/demo.js';
import jwt  from 'jsonwebtoken';

// initialization
const router = express.Router();

// attach vertical info to each request based of the request origin / site.
router.use((req, res, next) => {
	// TODO implement dynamically from DB. when we scale to verticals/clients.
	// ...

	// TODO implement middleware to inject in the vertical/client being used.
	// for now use "demo" vertical as default.
	req.vertical = demoVertical;

	// TODO implement middleware to inject in the logged-in user.
	// for now add "sampleAdmin" user as default.
	req.user = {
		type: 202,
		id: 1001,
		username: 'contactqaswads@gmail.com',
		firstName: 'Qaswa',
		lastName: 'Admin',
		contacts: [923002609916, 923330400808],
		areaId: 1001,
		address: 'H 200, Street 9, Test Town, Lahore.',

		lastLogin: '2021-01-15T21:39:51.835Z',

		"createdOn": "2021-01-15T21:39:51.835Z",
		"createdBy": 1002,
		"lastUpdatedOn": "",
		"lastUpdatedBy": 0
	};

	next();
});

/* routes files */
import companiesRouter from './src/app/companies/companies.routes.js';
import productsRouter from './src/app/products/products.routes.js';
import areasRouter from './src/app/areas/areas.routes.js';
import * as controller from './src/app/user/user.controller.js';
import {authenticateToken} from './src/middlewares/authenticate.js'
// all APIs routes mounting here
router.use('/companies', authenticateToken, companiesRouter);
router.use('/products', authenticateToken, productsRouter);
router.use('/areas', authenticateToken, areasRouter);
router.post('/login', controller.UserLogin);
router.delete('/logout', authenticateToken, controller.UserLogout);
export default router;
