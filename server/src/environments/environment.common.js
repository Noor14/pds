
export default {
	production: false,
	database: {
		name: 'demo',
		// for nodejs driver 3.6 latest
		// baseURI: `mongodb://qaswads-dev:verYeasYpassworD@cluster0.q82vv.mongodb.net`,
		// baseURI: `mongodb+srv://qaswads-dev:verYeasYpassworD@cluster0.q82vv.mongodb.net`,

		// TODO review, why latest 3.6 stopped working for Shahzad's ubuntu
		// for nodejs driver 2.2 or later.
		baseURI: `mongodb://qaswads-dev:verYeasYpassworD@cluster0-shard-00-00.q82vv.mongodb.net:27017,cluster0-shard-00-01.q82vv.mongodb.net:27017,cluster0-shard-00-02.q82vv.mongodb.net:27017`,
	}
};
