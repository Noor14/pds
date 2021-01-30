
'use strict';

// deps
import express from 'express';

// app modules
import * as controller from './user.controller.js';
import {authenticateToken} from '../../middlewares/authenticate.js';

// initialization
const router = express.Router();

router.post('/', controller.addOne);
router.put('/', authenticateToken, controller.updateOne);
router.delete('/:id',authenticateToken, controller.deleteOne);
router.get('/:id',authenticateToken, controller.getOne);
router.get('/',authenticateToken, controller.getList);

/* exports */
export default router;
