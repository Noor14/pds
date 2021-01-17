const envCommon = require('./environment.common');

// app modules
const env = {...envCommon,
	production: false,

};


/* exports */
module.exports = env;
