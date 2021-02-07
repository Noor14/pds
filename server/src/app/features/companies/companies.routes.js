
'use strict';

// deps
import express from 'express';

// app modules
import * as controller from './companies.controller.js';

// initialization
const router = express.Router();

router.post('/', controller.addOne);
router.put('/', controller.updateOne);
router.delete('/:id', controller.deleteOne);
router.get('/:id', controller.getOne);
router.get('/', controller.getList);

/* exports */
export default router;
