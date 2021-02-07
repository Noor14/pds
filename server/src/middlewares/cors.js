
const config = {
	CORS__WHITE_LISTED_ORIGINS: [
		'http://localhost:3400',
		'http://localhost:3401',

		'http://www.qaswads-dev.herokuapp.com',
		'https://www.qaswads-dev.herokuapp.com',

		'http://www.qaswads.herokuapp.com',
		'https://www.qaswads.herokuapp.com',
	],
};

// enables CORS for /api/ for /app, and /auth, per some conditions.
export default function (req, callback) {
	let corsOptions = {

		// disable CORS by default.
		origin: false,

		methods: `OPTIONS,GET,POST,PUT,DELETE`,
		allowedHeaders: `Authorization,Origin,X-Requested-With,Content-Type,Accept`,
		credentials: true,

		preflightContinue: false,
		optionsSuccessStatus: 204,
		maxAge: 86400, // firefox 86400s (24 hrs), chrome 600s (10 mints)
	};

	// TODO - implement to look into DB against target vertical to validate its allowed origins.
	// reflect (enable) the requested origin in the CORS response
	if (config.CORS__WHITE_LISTED_ORIGINS.indexOf(req.header('Origin')) !== -1) {
		corsOptions.origin = true;
	}

	// callback expects two parameters: error and options
	callback(null, corsOptions);
}
