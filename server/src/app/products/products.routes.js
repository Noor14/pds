
'use strict';

// deps
const express = require('express');

// app modules
const controller = require('./products.controller');

// initialization
const router = express.Router();

router.get('/', controller.getAll);
// router.post('/', controller.create);
// router.put('/', controller.update);
// router.get('/:id?', controller.getOne);
// router.delete('/:id?', controller.delete);

exports.default = router;

