
class CompaniesService {
	constructor() {
	}

	// TODO this will be async process. aggregates etc.
	fillInAdditionalFieldsForCompany(company) {
		console.log('fillInAdditionalFieldsForCompany:', company);
		const modifiedCompany = company.toObject();

		modifiedCompany.totalProducts = 0;
		modifiedCompany.totalOrders = 0;
		modifiedCompany.totalAmount = 0;

		return modifiedCompany;
	}
}

/* exports */
const companiesService = new CompaniesService();
export default companiesService;
