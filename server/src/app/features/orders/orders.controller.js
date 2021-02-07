'use strict';

// deps

// app modules
import respond from '../../shared/services/respond.js';
import databaseService from '../../shared/services/database.js';
import ordersService from './orders.service.js';
import Order from './order.model.js';

// local
const controllerConfig = {
	entityNameSingle: `Order`,
	entityNameMany: `Orders`,
};

/* exports */
export {
	addOne,
	updateOne,
	deleteOne,
	getOne,
	getList
};


/* function declarations */

// creates a new item
async function addOne(req, res) {
	const orderData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForCreate(req, orderData);

	const data = new Order(orderData);
	data.save((error, newOrder) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be created.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		newOrder = ordersService.fillInAdditionalFieldsForOrder(newOrder);

		respond.withSuccess(res, {
			order: newOrder
		});
	})
}

// updates the existing item
async function updateOne(req, res) {
	const orderData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForUpdate(req, orderData);

	Order.findOneAndUpdate({ id: { $eq: orderData.id } }, orderData, { new:  true }, (error, updatedOrder) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be updated.`, error);
			return;
		}

		// TODO - review if we should inject in server generated fields ?

		// fill in eval / aggregate based fields.
		updatedOrder = ordersService.fillInAdditionalFieldsForOrder(updatedOrder);

		respond.withSuccess(res, {
			order: updatedOrder
		});
	})
}

// deletes target item by id
async function deleteOne(req, res) {
	Order.findOneAndDelete({ id: { $eq: req.params.id } }, (error, order) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be deleted.`, error);
		}

		// fill in eval / aggregate based fields.
		// no need here.
		// order = ordersService.fillInAdditionalFieldsForOrder(order);

		respond.withSuccess(res, {
			order: order
		});
	});
}

// gets target item by id
async function getOne(req, res) {
	Order.findOne({ id: { $eq: req.params.id } }, (error, order) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be retrieved.`, error);
		}

		// fill in eval / aggregate based fields.
		order = ordersService.fillInAdditionalFieldsForOrder(order);

		respond.withSuccess(res, {
			order: order
		});
	});
}

// gets all items
async function getList(req, res) {
	Order.find({}, (error, orders) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameMany} could not be retrieved.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		orders = orders.map(ordersService.fillInAdditionalFieldsForOrder);

		respond.withSuccess(res, {
			orders: orders
		});
	})
}
