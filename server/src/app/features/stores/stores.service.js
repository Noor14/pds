
class StoresService {
	constructor() {
	}

	// TODO this will be async process. aggregates etc.
	fillInAdditionalFieldsForStore(store) {
		console.log('fillInAdditionalFieldsForStore:', store);
		const modifiedStore = store.toObject();

		modifiedStore.totalOrders = 0;
		modifiedStore.totalAmount = 0;

		return modifiedStore;
	}
}

/* exports */
const storesService = new StoresService();
export default storesService;
