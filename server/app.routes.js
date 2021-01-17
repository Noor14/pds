/**
 * Main application routes
 */

'use strict';

// deps
const express = require('express');

// app modules
const demoVertical = require('./verticals/demo');

// initialization
const router = express.Router();

// attach vertical info to each request based of the request origin / site.
router.use((req, res, next) => {
	console.log('attach vertical: ', req.headers.origin);
	// TODO implement dynamically from DB. when we scale to verticals/clients.
	// ...

	// for now use "demo" vertical as default.
	req.vertical = demoVertical;

	next();
});

// all APIs routes here
router.use('/companies', require('./src/companies/companies.routes').default);
router.use('/products', require('./src/products/products.routes').default);
// app.use('/areas', require('./../routes/areas.routes').default);
// app.use('/stores', require('./../routes/stores.routes').default);
// app.use('/orders', require('./../routes/orders.routes').default);
// app.use('/doctors', require('./../routes/doctors.routes').default);
// app.use('/contracts', require('./../routes/contracts.routes').default);

/* exports */
exports.default = router;

/* function declarations */
