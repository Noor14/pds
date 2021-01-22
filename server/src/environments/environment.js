
// app modules
import development from './environment.dev.js';
import production from './environment.prod.js';

const environments = {
	development,
	production,
}

// locals
const settings = {
	defaultEnv: 'development'
};

const currentEnv = process.env.NODE_ENV || settings.defaultEnv;
const env = environments[currentEnv];

export default env;
