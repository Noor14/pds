'use strict';

// deps

// app modules
import respond from '../shared/services/respond.js';
import databaseService from '../shared/services/database.js';
import productsService from './products.service.js';
import Product from './product.model.js';

// local
const controllerConfig = {
	entityNameSingle: `Product`,
	entityNameMany: `Products`,
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
async function addMultiple(req, res) {

}

// creates a new item
async function addOne(req, res) {
	const productData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForCreate(req, productData);

	const data = new Product(productData);
	data.save((error, newProduct) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be created.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		newProduct = productsService.fillInAdditionalFieldsForProduct(newProduct);

		respond.withSuccess(res, {
			product: newProduct
		});
	})
}

// updates the existing item
async function updateOne(req, res) {
	const productData = req.body;

	// add and protect common fields
	databaseService.apiFillInFieldsForUpdate(req, productData);

	Product.findOneAndUpdate({ id: { $eq: productData.id } }, productData, { new:  true }, (error, updatedProduct) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be updated.`, error);
			return;
		}

		// case: no item found in DB.
		if (!updatedProduct) {
			respond.withFailure(res, `No ${controllerConfig.entityNameSingle} found with given criteria to update.`, null);
			return;
		}

		// TODO - review if we should inject in server generated fields ?

		// fill in eval / aggregate based fields.
		updatedProduct = productsService.fillInAdditionalFieldsForProduct(updatedProduct);

		respond.withSuccess(res, {
			product: updatedProduct
		});
	})
}

// deletes target item by id
async function deleteOne(req, res) {
	Product.findOneAndDelete({ id: { $eq: req.params.id } }, (error, product) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be deleted.`, error);
		}

		// case: no item found in DB.
		if (!product) {
			respond.withFailure(res, `No ${controllerConfig.entityNameSingle} found with given criteria to delete.`, null);
			return;
		}

		// fill in eval / aggregate based fields.
		// no need here.
		// product = productsService.fillInAdditionalFieldsForProduct(product);

		respond.withSuccess(res, {
			product: product
		});
	});
}

// gets target item by id
async function getOne(req, res) {
	Product.findOne({ id: { $eq: req.params.id } }, (error, product) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameSingle} could not be retrieved.`, error);
		}

		// case: no item found in DB.
		if (!product) {
			respond.withFailure(res, `No ${controllerConfig.entityNameSingle} found with given criteria.`, null);
			return;
		}

		// fill in eval / aggregate based fields.
		product = productsService.fillInAdditionalFieldsForProduct(product);

		respond.withSuccess(res, {
			product: product
		});
	});
}

// gets all items
async function getList(req, res) {
	Product.find({}, (error, products) => {

		// case: DB error
		if (error) {
			respond.withFailure(res, `${controllerConfig.entityNameMany} could not be retrieved.`, error);
			return;
		}

		// fill in eval / aggregate based fields.
		products = products.map(productsService.fillInAdditionalFieldsForProduct);

		// Note: when no records found, it should still be success response.
		respond.withSuccess(res, {
			products: products
		});
	})
}
