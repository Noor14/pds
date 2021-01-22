
'use strict';

// deps
const express = require('express');

// app modules
const controller = require('./companies.controller');

// initialization
const router = express.Router();

router.post('/', controller.addOne);
router.put('/:id', controller.updateOne);
router.delete('/:id', controller.deleteOne);
router.get('/:id', controller.getOne);
router.get('/', controller.getList);

exports.default = router;

