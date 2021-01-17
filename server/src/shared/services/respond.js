

/* exports */
module.exports = {
	withSuccess,
	withFailure,
};


/* functions declarations */
function withSuccess(res, data) {
	// console.log('respond: withSuccess', data);

	res.send({
		success: true,
		data: data
	});
}

function withFailure(res, messages, otherInfo, status) {
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
