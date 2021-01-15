
'use strict';
const express = require('express');
const getAllCompanies =  require('./companies.controller')
const router = express.Router();

router.get("/", getAllCompanies);
// router.post("/", controller.saveCompany);
// router.get("/:id?", controller.getCompanyByID);

module.exports = router;

