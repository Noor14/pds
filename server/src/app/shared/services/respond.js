
class ResponseService {
	constructor() {
	}

	withSuccess(res, data) {
		// console.log('respond: withSuccess', data);

		res.send({
			success: true,
			data: data
		});
	}

	withFailure(res, messages, otherInfo, status) {
		// console.log('respond: withFailure', messages, otherInfo);

		if (status) {
			res.status(status);
		}

		res.send({
			success: false,
			data: {
				messages: messages,
				info: otherInfo,
			}
		});
	}
}

const responseService = new ResponseService();
export default responseService;
