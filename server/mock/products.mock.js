
// class Product {
// 	id = '';
// 	batchNumber = '';
// 	packInfo = '';
// 	name = '';
//
// 	type = 0;
// 	companyId = '';
// 	tp = 0;
// 	mrp = 0;
// 	net = 0;
// 	boxQuantity = 0;
//
// 	createdBy = '';
// 	createdOn = '';
// 	updatedBy = '';
// 	updatedOn = '';
// }

const productsRawMock = [
	{
		id: '0000101',
		batchNumber: 'S-00001',
		packInfo: '10s',
		name: 'Amaxol',
		generic: 'Lotheocylceipsum',

		type: 2,
		companyId: 1,
		tp: 16,
		mrp: 96,
		net: 13,
		boxQuantity: 50,
	},
	{
		id: '0000102',
		batchNumber: 'BS-00002',
		packInfo: '5s',
		name: 'Panadol',
		generic: 'Floeryotiny',

		type: 1,
		companyId: 4,
		tp: 16,
		mrp: 4,
		net: 45,
		boxQuantity: 100,
	},
	{
		id: '0000103',
		batchNumber: 'TS-00083',
		packInfo: '30ml',
		name: 'Brufen',
		generic: 'Dolarcythn',

		type: 2,
		companyId: 2,
		tp: 16,
		mrp: 96,
		net: 13,
		boxQuantity: 40,
	},
	{
		id: '0000104',
		batchNumber: 'AS-00099',
		packInfo: '2x7',
		name: 'Augmentin',
		generic: 'Teczhocxin',

		type: 2,
		companyId: 3,
		tp: 50,
		mrp: 65,
		net: 65,
		boxQuantity: 30,
	},
	{
		id: '0000104',
		batchNumber: 'AS-00063',
		packInfo: '6amp',
		name: 'Mecobromin',
		generic: 'Mecobarmin',

		type: 4,
		companyId: 4,
		tp: 50,
		mrp: 65,
		net: 40,
		boxQuantity: 30,
	},
]

module.exports = productsRawMock;
