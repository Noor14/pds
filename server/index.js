/**
 * Main application
 */
'use strict';

const express = require('express');
const app = express();
const port = 3302;

require('./routes').default(app);

  
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
});