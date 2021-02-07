
'use strict';

// deps
import express from 'express';

// app modules
import * as controller from './users.controller.js';
// import { authenticateToken } from '../../middlewares/authenticate.js';

// initialization
const router = express.Router();

router.post('/', controller.addOne); // add user should not be a public API. only admin can do this.
router.put('/', controller.updateOne);
router.delete('/:id', controller.deleteOne);
router.get('/:id', controller.getOne);
router.get('/', controller.getList);

/* exports */
export default router;
