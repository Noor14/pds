/**
 * Main application routes
 */

'use strict';

// deps
const express = require('express');

// app modules
const demoVertical = require('./src/verticals/demo');

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

// all APIs routes here
router.use('/companies', require('./src/app/companies/companies.routes').default);
router.use('/products', require('./src/app/products/products.routes').default);
// app.use('/areas', require('./../routes/areas.routes').default);
// app.use('/stores', require('./../routes/stores.routes').default);
// app.use('/orders', require('./../routes/orders.routes').default);
// app.use('/doctors', require('./../routes/doctors.routes').default);
// app.use('/contracts', require('./../routes/contracts.routes').default);

/* exports */
exports.default = router;

/* function declarations */
