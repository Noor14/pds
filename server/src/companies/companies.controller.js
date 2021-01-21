
'use strict';

// deps

// app modules
const respond = require('../shared/services/respond');
const { connectDB } = require('../shared/services/mongodbConnect');
const company = require('./company.model')
// locals
const config = {
	collectionName: `companies`
};

/* exports */
module.exports = {
	getAll,
	getOne,
	create
};


/* function declarations */

// create company
async function create(req, res) {
	const db = await connectDB(req);
	db.collection(config.collectionName)
	  .insertOne(req.body, (error, response)=>{
		if(error){
		  console.log(error)
		  respond.withFailure(res, 'record not inserted', 'fail');
		}else{
		  respond.withSuccess(res, {
			  companies: response.ops.pop()
		  });
		}
	})

	// const db = await connectDB(req);
	// if(db){
	// 	const data = new company(req.body)
	// 	data.save((error, response)=>{
	// 		  if(error){
	// 			console.log(error)
	// 			respond.withFailure(res, 'record not inserted', 'fail');
	// 		  }else{
	// 			respond.withSuccess(res, {
	// 				companies: response.ops.pop()
	// 			});
	// 		  }
	// 	  })
	// }

}


// gets all companies
async function getAll(req, res) {
	// const db = await connectDB(req);
	// if(db){
	// 	company.find({}, (error, response)=>{
	// 		  if(error){
	// 			console.log(error)
	// 			respond.withFailure(res, 'record not inserted', 'fail');
	// 		  }else{
	// 			respond.withSuccess(res, {
	// 				companies: response
	// 			});
	// 		  }
	// 	  })
	// }
	const db = await connectDB(req);
	const data = await db
	  .collection(config.collectionName)
	  .find({})
	  .toArray();

	respond.withSuccess(res, {
		companies: data,
	});
}


// gets target company info by id
async function getOne(req, res) {
	const db = await connectDB(req);
	db.collection(config.collectionName)
		.findOne({ id: { $eq: req.params.id } }, (error, response)=>{
			if(error){
				respond.withFailure(res, 'record not searchable', 'fail');
			  }else{
				respond.withSuccess(res, {
					companies: response
				});
			  }
		});
}
