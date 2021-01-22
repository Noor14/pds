
'use strict';

// deps

// app modules
const respond = require('../shared/services/respond');
const company = require('./company.model');

/* exports */
module.exports = {
	getAll,
	getOne,
	create
};


/* function declarations */

// create company
async function create(req, res) {
		const data = new company(req.body)
		data.save((error, response)=>{
			  if(error){
				  console.log(error)
				respond.withFailure(res, 'record not inserted', 'fail');
			  }else{
				respond.withSuccess(res, {
					companies: response
				});
			  }
		  })

}


// gets all companies
async function getAll(req, res) {
	company.find({}, (error, response)=>{
		if(error){
		  respond.withFailure(res, 'record not inserted', 'fail');
		}else{
		  respond.withSuccess(res, {
			  companies: response
		  });
		}
	})
}


// gets target company info by id
async function getOne(req, res) {
	company.findOne({ id: { $eq: req.params.id } }, (error, response)=>{
			if(error){
				respond.withFailure(res, 'record not searchable', 'fail');
			  }else{
				respond.withSuccess(res, {
					companies: response
				});
			  }
		});
}
