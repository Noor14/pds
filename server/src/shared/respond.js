

/* exports */
module.exports.withSuccess = withSuccess;
module.exports.withFailure = withFailure;


/* functions declarations */
function withSuccess(res, data) {
	console.log('withSuccess', data);

	res.send({
		success: true,
		data: data
	});
}

function withFailure(res, messages, otherInfo, status) {
	console.log('withFailure', messages, otherInfo);

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
