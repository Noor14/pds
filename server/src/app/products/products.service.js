
class ProductsService {
	constructor() {
	}

	// TODO this will be async process. aggregates etc.
	fillInAdditionalFieldsForProduct(product) {
		console.log('fillInAdditionalFieldsForProduct:', product);
		const modifiedProduct = product.toObject();

		modifiedProduct.totalProducts = 0;
		modifiedProduct.totalOrders = 0;
		modifiedProduct.totalAmount = 0;

		return modifiedProduct;
	}
}

/* exports */
const productsService = new ProductsService();
export default productsService;
