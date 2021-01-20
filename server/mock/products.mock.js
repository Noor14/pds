
// class Product {
// 	id = '';
// 	batchNumber = '';
// 	packInfo = '';
// 	name = '';
//
// 	type = 0;
// 	companyId = '';
// 	mrp = 0;
// 	net = 0;
// 	boxQuantity = 0;
//
// 	createdBy = '';
// 	createdOn = '';
//  lastUpdatedBy = '';
// 	lastUpdatedOn = '';
// }

const productsRawMock = [
	{
		"id": 1001,
		"name": "ACIDOX SYP",
		"generic": "ANTACID",
		"packInfo": "120ML",
		"mrp": 150,
		"net": 22,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1002,
		"name": "ACTIVE PLUS",
		"generic": "MOUTH WASH",
		"packInfo": "120ML",
		"mrp": 175,
		"net": 35,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1003,
		"name": "CAL D DROPS",
		"generic": "CALCIUM",
		"packInfo": "10ML",
		"mrp": 275,
		"net": 40,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1004,
		"name": "CAL D SYP",
		"generic": "CALCIUM",
		"packInfo": "120 ML",
		"mrp": 150,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1005,
		"name": "CAL D TAB",
		"generic": "CALCIUM",
		"packInfo": "20'S",
		"mrp": 270,
		"net": 50,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1006,
		"name": "C-CUF SYP",
		"generic": "IV LEAF",
		"packInfo": "120ML",
		"mrp": 150,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1007,
		"name": "CORIX DROPS",
		"generic": "COLIC DROPS",
		"packInfo": "25ML",
		"mrp": 140,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1008,
		"name": "D SURE TAB",
		"generic": "D3 200000",
		"packInfo": "2'S",
		"mrp": 350,
		"net": 45,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1009,
		"name": "D VISOL TAB",
		"generic": "D3 20000",
		"packInfo": "1'S",
		"mrp": 160,
		"net": 30,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1010,
		"name": "DUCID SYP",
		"generic": "ANTACID",
		"packInfo": "120ML",
		"mrp": 150,
		"net": 22,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1011,
		"name": "DYRID SACHETS",
		"generic": "PROBIOTIC",
		"packInfo": "10'S",
		"mrp": 390,
		"net": 65,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1012,
		"name": "FEMALTER SYP",
		"generic": "IRON",
		"packInfo": "120ML",
		"mrp": 150,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1013,
		"name": "FEMALTER TAB",
		"generic": "IRON",
		"packInfo": "20'S",
		"mrp": 220,
		"net": 45,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1014,
		"name": "GINKOCIN SYP",
		"generic": "COLINE+GINKO",
		"packInfo": "120ML",
		"mrp": 450,
		"net": 45,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1015,
		"name": "GYNOCARE SYP",
		"generic": "LECORIA",
		"packInfo": "240ML",
		"mrp": 280,
		"net": 45,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1016,
		"name": "HANCUF SYP",
		"generic": "IV LEAF",
		"packInfo": "120ML",
		"mrp": 150,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1017,
		"name": "HEARTIN TAB",
		"generic": "CO ENZYME Q 10 50MG",
		"packInfo": "20'S",
		"mrp": 495,
		"net": 60,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1018,
		"name": "LAKZIM DROPS",
		"generic": "LACTASE ENZYME",
		"packInfo": "10ML",
		"mrp": 250,
		"net": 40,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1019,
		"name": "MEPLIN TAB",
		"generic": "L METHYL",
		"packInfo": "30'S",
		"mrp": 280,
		"net": 45,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1020,
		"name": "MYOTOL TAB",
		"generic": "MYO INSITOL",
		"packInfo": "30'S",
		"mrp": 975,
		"net": 95,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1021,
		"name": "NERVOLINE TAB",
		"generic": "L METHYL FOLTE",
		"packInfo": "20'S",
		"mrp": 360,
		"net": 50,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1022,
		"name": "ORBIT PLUS TAB",
		"generic": "APPITIZER",
		"packInfo": "120ML",
		"mrp": 150,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1023,
		"name": "ORGIX SYP",
		"generic": "PLANT CAL",
		"packInfo": "120ML",
		"mrp": 220,
		"net": 30,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1024,
		"name": "ORGIX TAB",
		"generic": "PLANT CAL",
		"packInfo": "20'S",
		"mrp": 400,
		"net": 50,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1025,
		"name": "ORTHIC TAB",
		"generic": "GLUCOSAMIN+MSN ETC",
		"packInfo": "20'S",
		"mrp": 850,
		"net": 75,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1026,
		"name": "OSTEOVIT TAB",
		"generic": "PLANT CAL",
		"packInfo": "20'S",
		"mrp": 400,
		"net": 50,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1027,
		"name": "OXIMIN SYP",
		"generic": "MULTIVITAMIN",
		"packInfo": "120ML",
		"mrp": 190,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1028,
		"name": "OXIMIN TAB",
		"generic": "MULTIVITAMIN",
		"packInfo": "20'S",
		"mrp": 360,
		"net": 45,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1029,
		"name": "REPRIL TAB",
		"generic": "ASClEN",
		"packInfo": "20'S",
		"mrp": 250,
		"net": 40,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1030,
		"name": "SERRITIN TAB",
		"generic": "SERIO PEPTIAZE",
		"packInfo": "20'S",
		"mrp": 390,
		"net": 50,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1031,
		"name": "SILLIRON SYP",
		"generic": "SILIMYRINE",
		"packInfo": "120ML",
		"mrp": 150,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1032,
		"name": "SILLIRON TAB",
		"generic": "SILIMYRINE",
		"packInfo": "20'S",
		"mrp": 350,
		"net": 45,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1033,
		"name": "SYLUM SACHETS",
		"generic": "FIBER CONSTIPATION",
		"packInfo": "10'S",
		"mrp": 380,
		"net": 50,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1034,
		"name": "TRICOK TAB",
		"generic": "TRABULAS",
		"packInfo": "20'S",
		"mrp": 550,
		"net": 60,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1035,
		"name": "VEETALUX SYP",
		"generic": "MULTIVITAMIN",
		"packInfo": "120ML",
		"mrp": 150,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1036,
		"name": "VEETALUX TAB",
		"generic": "MULTIVITAMIN",
		"packInfo": "30'S",
		"mrp": 320,
		"net": 65,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1037,
		"name": "BIFLEX TABLET",
		"generic": "GLUCOSAMIN, MSM",
		"packInfo": "30'S",
		"mrp": 510,
		"net": 80,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1038,
		"name": "BONTIX TABLET",
		"generic": "CALCIUM, VIT K2",
		"packInfo": "20'S",
		"mrp": 460,
		"net": 50,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1039,
		"name": "CICOF DROP",
		"generic": "COUGH DROP",
		"packInfo": "25ML",
		"mrp": 150,
		"net": 35,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1040,
		"name": "CRAMIL",
		"generic": "FOOD SUPPLEMENT",
		"packInfo": "210G",
		"mrp": 365,
		"net": 70,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1041,
		"name": "D-LIFE DROP",
		"generic": "VITAMIN A&D",
		"packInfo": "15ML",
		"mrp": 310,
		"net": 40,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1042,
		"name": "D-LIFE TABLET",
		"generic": "D3 200000IU",
		"packInfo": "1'S",
		"mrp": 185,
		"net": 20,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1043,
		"name": "D-LIFE TABLET",
		"generic": "D3 200000IU",
		"packInfo": "2'S",
		"mrp": 370,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1044,
		"name": "FEMTER SYRUP",
		"generic": "IRON",
		"packInfo": "20'S",
		"mrp": 160,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1045,
		"name": "FEMTER TABLET",
		"generic": "IRON",
		"packInfo": "20'S",
		"mrp": 250,
		"net": 45,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1046,
		"name": "GINKOLIN SYRUP",
		"generic": "GINKO BILOBA",
		"packInfo": "120ML",
		"mrp": 475,
		"net": 70,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1047,
		"name": "GYNOMENS SYRUP",
		"generic": "COLINE, GINKO",
		"packInfo": "240ML",
		"mrp": 250,
		"net": 50,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1048,
		"name": "LEXIN SYRUP",
		"generic": "PURNE JUICE",
		"packInfo": "120ML",
		"mrp": 160,
		"net": 30,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1049,
		"name": "MEVICAL-D SYRUP",
		"generic": "CALCIUM, D3, ZINC",
		"packInfo": "120ML",
		"mrp": 170,
		"net": 30,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1050,
		"name": "MEVICAL-D TABLET",
		"generic": "CALCIUM, D3, ZINC",
		"packInfo": "20'S",
		"mrp": 310,
		"net": 55,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1051,
		"name": "MEVICID SYRUP",
		"generic": "ANTACID",
		"packInfo": "120ML",
		"mrp": 135,
		"net": 30,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1052,
		"name": "MEVICON SYRUP",
		"generic": "IVY COUGH SYP",
		"packInfo": "120ML",
		"mrp": 170,
		"net": 32,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1053,
		"name": "MEVI-D DROP",
		"generic": "D3 DROPS",
		"packInfo": "15ML",
		"mrp": 290,
		"net": 40,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1054,
		"name": "MEVI-D TABLET",
		"generic": "D3 200000IU",
		"packInfo": "1'S",
		"mrp": 175,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1055,
		"name": "MEVIFER SYRUP",
		"generic": "IRON, VIT C, B12",
		"packInfo": "120ML",
		"mrp": 175,
		"net": 30,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1056,
		"name": "MEVIFER TABLET",
		"generic": "IRON, VIT C, B12",
		"packInfo": "20'S",
		"mrp": 290,
		"net": 55,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1057,
		"name": "MEVIFOL TABLET",
		"generic": "L-METHYLFOLATE",
		"packInfo": "30'S",
		"mrp": 280,
		"net": 65,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1058,
		"name": "MEVIGROW SYRUP",
		"generic": "APPETIZER",
		"packInfo": "120ML",
		"mrp": 170,
		"net": 30,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1059,
		"name": "MEVI-PLUS DROP",
		"generic": "A+D3 DROPS",
		"packInfo": "15ML",
		"mrp": 325,
		"net": 45,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1060,
		"name": "MEVI-Z SYRUP",
		"generic": "MULTIVITAMIN/MINERAL",
		"packInfo": "120ML",
		"mrp": 160,
		"net": 30,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1061,
		"name": "MEVI-Z TABLET",
		"generic": "MULTIVITAMIN/MINERAL",
		"packInfo": "20'S",
		"mrp": 290,
		"net": 55,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1062,
		"name": "ORBITOL SYP",
		"generic": "APPETIZER",
		"packInfo": "120ML",
		"mrp": 142,
		"net": 25,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1063,
		"name": "SILIRUN SYRUP",
		"generic": "SILIMYRINE",
		"packInfo": "120ML",
		"mrp": 142,
		"net": 30,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1064,
		"name": "URIBEST SACHET",
		"generic": "CRANBERRY",
		"packInfo": "10'S",
		"mrp": 300,
		"net": 60,
		"companyId": 1002,
		"boxQuantity": 1
	},
	{
		"id": 1065,
		"name": "C-prox Tab 250mg",
		"generic": "Ciprofloxacin",
		"packInfo": "10's",
		"mrp": 175,
		"net": 50,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1066,
		"name": "C-prox Tab 500mg",
		"generic": "Ciprofloxacin",
		"packInfo": "10's",
		"mrp": 275,
		"net": 72,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1067,
		"name": "Hispan 100mg Susp",
		"generic": "Cefixime",
		"packInfo": "30ml",
		"mrp": 195,
		"net": 58,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1068,
		"name": "Hispan Cap 200mg",
		"generic": "Cefixime",
		"packInfo": "5's",
		"mrp": 212,
		"net": 65,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1069,
		"name": "Hispan Cap 400mg",
		"generic": "Cefixime",
		"packInfo": "5's",
		"mrp": 350,
		"net": 110,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1070,
		"name": "Hispan DS Susp",
		"generic": "Cefixime",
		"packInfo": "30ml",
		"mrp": 270,
		"net": 85,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1071,
		"name": "Levoflomed 250mg Caps",
		"generic": "Levofloxacin",
		"packInfo": "10's",
		"mrp": 215,
		"net": 55,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1072,
		"name": "Levoflomed 500mg Caps",
		"generic": "Levofloxacin",
		"packInfo": "10's",
		"mrp": 320,
		"net": 75,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1073,
		"name": "Antimal Inj. 80mg",
		"generic": "Artemether",
		"packInfo": "6 Amp.",
		"mrp": 437,
		"net": 122,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1074,
		"name": "Antimal 40/240mg Tab",
		"generic": "Artemether",
		"packInfo": "1x8",
		"mrp": 287,
		"net": 95,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1075,
		"name": "Antimal Susp 15/90",
		"generic": "Artemether",
		"packInfo": "30ml",
		"mrp": 125,
		"net": 45,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1076,
		"name": "Mecomez Inj. 40mg",
		"generic": "Omeprazole",
		"packInfo": "1xVial",
		"mrp": 325,
		"net": 75,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1077,
		"name": "Mecomez Caps.",
		"generic": "Omeprazole",
		"packInfo": "2x7",
		"mrp": 175,
		"net": 44,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1078,
		"name": "Vodim Tab.5Omg",
		"generic": "Diclofenac Sodium",
		"packInfo": "20's",
		"mrp": 115,
		"net": 28,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1079,
		"name": "Vodim Injection",
		"generic": "Diclofenac Sodium",
		"packInfo": "10amp",
		"mrp": 230,
		"net": 65,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1080,
		"name": "Panaprazole Tab",
		"generic": "Pantoprazole",
		"packInfo": "2x7",
		"mrp": 287,
		"net": 65,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1081,
		"name": "Mincomycin 600MG Inj",
		"generic": "Lincomycin",
		"packInfo": "5 AMP",
		"mrp": 316,
		"net": 108,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1082,
		"name": "Fero 100mg/5ml inj.",
		"generic": "Iron sucrose usp",
		"packInfo": "5 AMP",
		"mrp": 1150,
		"net": 310,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1083,
		"name": "Mecobron Inj. 1V/ 1M",
		"generic": "Mecobalamin",
		"packInfo": "10 AMP",
		"mrp": 520,
		"net": 95,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1084,
		"name": "Mecobron 500mg. Tab",
		"generic": "Mecobalamin",
		"packInfo": "30 Tabs",
		"mrp": 221,
		"net": 60,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1085,
		"name": "Mycotek 150mg Caps.",
		"generic": "Fluconazole",
		"packInfo": "1 cap",
		"mrp": 155,
		"net": 36,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1086,
		"name": "Domprog Sup 5mg/60ml",
		"generic": "Dompridon",
		"packInfo": "120ml",
		"mrp": 75,
		"net": 26,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1087,
		"name": "Domprog Tab 10mg",
		"generic": "Dompridon",
		"packInfo": "5x10's",
		"mrp": 215,
		"net": 44,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1088,
		"name": "Ezemox 400mg Tab",
		"generic": "Moxifloxacin Hcl",
		"packInfo": "5's",
		"mrp": 475,
		"net": 150,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1089,
		"name": "Lansomed 30 mg",
		"generic": "Lansaprazole",
		"packInfo": "2x7",
		"mrp": 206,
		"net": 55,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1090,
		"name": "Medifenac Tab SR 100mg",
		"generic": "Diclofenac sodium",
		"packInfo": "30's",
		"mrp": 240,
		"net": 50,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1091,
		"name": "Medilorin 10mg Tab",
		"generic": "Loratadine",
		"packInfo": "10's",
		"mrp": 72,
		"net": 23,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1092,
		"name": "Merzepa syrup",
		"generic": "Hepa-merz",
		"packInfo": "120ml",
		"mrp": 135,
		"net": 55,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1093,
		"name": "Medilorin 60ml Syp",
		"generic": "Loratadine",
		"packInfo": "60ml",
		"mrp": 49,
		"net": 18,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1094,
		"name": "X-prazole 20mg tab",
		"generic": "Esomeprazole",
		"packInfo": "7x2's",
		"mrp": 119,
		"net": 40,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1095,
		"name": "X-prazole 40mg tab",
		"generic": "Esomeprazole",
		"packInfo": "7x2's",
		"mrp": 198,
		"net": 50,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1096,
		"name": "X-prazole 40mg inj",
		"generic": "Esomeprazole",
		"packInfo": "1 vail",
		"mrp": 300,
		"net": 80,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1097,
		"name": "Atodine syrp",
		"generic": "Famotodine",
		"packInfo": "60ml",
		"mrp": 64,
		"net": 24,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1098,
		"name": "Atodine 40mg",
		"generic": "Famotodine",
		"packInfo": "2x10",
		"mrp": 180,
		"net": 40,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1099,
		"name": "M carry Syr. 120ml",
		"generic": "Iron polymaltos",
		"packInfo": 120,
		"mrp": 120,
		"net": 40,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1100,
		"name": "M carry Tabs.",
		"generic": "Iron polymaltos",
		"packInfo": "30'S",
		"mrp": 240,
		"net": 60,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1101,
		"name": "Macxone Inj.1gm",
		"generic": "Ceftriaxone Sodium",
		"packInfo": "1 x vial",
		"mrp": 240,
		"net": 60,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1102,
		"name": "Macxone Inj. 250mg",
		"generic": "Ceftriaxone Sodium",
		"packInfo": "1 x vial",
		"mrp": 90,
		"net": 30,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1103,
		"name": "Macxone Inj. 500mg",
		"generic": "Ceftriaxone Sodium",
		"packInfo": "1 x vial",
		"mrp": 140,
		"net": 45,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1104,
		"name": "Mouflam Tab. 50mg",
		"generic": "Diclofenac Potassium",
		"packInfo": "20's",
		"mrp": 120,
		"net": 27,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1105,
		"name": "Tissot Tab. 200mg",
		"generic": "Ofloxacin",
		"packInfo": "10's",
		"mrp": 118,
		"net": 32,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1106,
		"name": "Mincomycin 600MG",
		"generic": "Lincomycin",
		"packInfo": "5 AMP",
		"mrp": 315,
		"net": 105,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1107,
		"name": "Aztek 250mg tab",
		"generic": "Azithromycin",
		"packInfo": "1 x 10",
		"mrp": 299,
		"net": 90,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1108,
		"name": "Taczin 500mg",
		"generic": "Cefotaxime Sodium Usp",
		"packInfo": "1 x vial",
		"mrp": 126,
		"net": 36,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1109,
		"name": "Taczine 250 mg",
		"generic": "Cefotaxime Sodium Usp",
		"packInfo": "1 x vial",
		"mrp": 60,
		"net": 24,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1110,
		"name": "Taczine 1g Inj.",
		"generic": "Cefotaxime Sodium Usp",
		"packInfo": "1 x vial",
		"mrp": 160,
		"net": 45,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1111,
		"name": "Enadin 120mg",
		"generic": "Fexofinadine",
		"packInfo": "1 x 10",
		"mrp": 116,
		"net": 48,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1112,
		"name": "Zolweb 2.5mg",
		"generic": "Letrozole",
		"packInfo": "3 x 10",
		"mrp": 3600,
		"net": 765,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1113,
		"name": "Deborn-L lnj",
		"generic": "Diclofenac sodium+ lignocain HCI",
		"packInfo": "1 amp",
		"mrp": 14,
		"net": 5,
		"companyId": 1001,
		"boxQuantity": 1
	},
	{
		"id": 1114,
		"name": "Mycotek 150mg",
		"generic": "Fluconazole",
		"packInfo": "1 cap",
		"mrp": 135,
		"net": 35,
		"companyId": 1001,
		"boxQuantity": 1
	}
]

module.exports = productsRawMock;
