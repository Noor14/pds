
// app modules
const environments = {
	development: require('./environment.dev'),
	production: require('./environment.prod'),
}

// locals
const settings = {
	defaultEnv: 'development'
};

const currentEnv = process.env.NODE_ENV || settings.defaultEnv;
const env = environments[currentEnv];

/* exports */
module.exports = env;
