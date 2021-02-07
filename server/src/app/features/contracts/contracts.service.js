
class ContractsService {
	constructor() {
	}

	// TODO this will be async process. aggregates etc.
	fillInAdditionalFieldsForContract(contract) {
		console.log('fillInAdditionalFieldsForContract:', contract);
		const modifiedContract = contract.toObject();

		modifiedContract.totalProducts = 0;
		modifiedContract.totalOrders = 0;
		modifiedContract.totalAmount = 0;

		return modifiedContract;
	}
}

/* exports */
const contractsService = new ContractsService();
export default contractsService;
