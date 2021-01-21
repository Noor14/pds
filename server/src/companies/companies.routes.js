
'use strict';

// deps
const express = require('express');

// app modules
const controller = require('./companies.controller');

// initialization
const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id?', controller.getOne);
router.post('/', controller.create);
// router.put('/', controller.update);
// router.delete('/:id?', controller.delete);

exports.default = router;

