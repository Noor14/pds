
class OrdersService {
	constructor() {
	}

	// TODO this will be async process. aggregates etc.
	fillInAdditionalFieldsForOrder(order) {
		console.log('fillInAdditionalFieldsForOrder:', order);
		const modifiedOrder = order.toObject();

		modifiedOrder.totalProducts = 0;
		modifiedOrder.totalOrders = 0;
		modifiedOrder.totalAmount = 0;

		return modifiedOrder;
	}
}

/* exports */
const ordersService = new OrdersService();
export default ordersService;
