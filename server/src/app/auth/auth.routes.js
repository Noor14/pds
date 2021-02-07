
'use strict';

// deps
import express from 'express';

// app modules
import * as controller from './auth.controller.js';

// initialization
const router = express.Router();

router.post('/login', controller.login);
router.post('/logout', controller.logout);

/* exports */
export default router;
