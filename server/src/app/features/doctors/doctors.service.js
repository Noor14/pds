
class DoctorsService {
	constructor() {
	}

	// TODO this will be async process. aggregates etc.
	fillInAdditionalFieldsForDoctor(doctor) {
		console.log('fillInAdditionalFieldsForDoctor:', doctor);
		const modifiedDoctor = doctor.toObject();

		modifiedDoctor.totalDoctors = 0;
		modifiedDoctor.totalSale = 0;

		return modifiedDoctor;
	}
}

/* exports */
const doctorsService = new DoctorsService();
export default doctorsService;
