
class AreasService {
	constructor() {
	}

	// TODO this will be async process. aggregates etc.
	fillInAdditionalFieldsForArea(area) {
		console.log('fillInAdditionalFieldsForArea:', area);
		const modifiedArea = area.toObject();

		modifiedArea.totalProducts = 0;
		modifiedArea.totalOrders = 0;
		modifiedArea.totalAmount = 0;

		return modifiedArea;
	}
}

/* exports */
const areasService = new AreasService();
export default areasService;
