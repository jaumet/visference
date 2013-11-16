/////////////////////////////////
//          VISFERENCE
//      CONFIGURATION FILE
//////////////////////// [Canberra, Jul-Set2013 by Jaume@Nualart.cat]
// Visference, as it is now, are two exploration tools for a collection of items
// First application of Visaference is for academic papers from conferences. therefor its name.
// The two tools are SuperList and AREA 
// SuperList:
//
// AREA: 
//
// Three variable need to be defined:
// FIELDS -> This variable is only used by AREA. 
//    It defines the machine name the human name and whether each paramater 
//    is eligible for filtering.
// ROLE DEFINITIONS:
// 		"table" -> only SuperList as a column in the table
// 		"category" -> only SuperList as a category in left column
//		"subcategory" -> only SuperList as a subcategory in left column
// 		"area" -> only as AREA field
// 		"table-area" -> SuperList as a column in the table + AREA parameter
// 		"category-area" -> SuperList as a category in left column + AREA parameter
// 
// FILTERS -> this variable is used only for Superlist.
//    It defines the machine names for each category


///////////////////////////////////////////////////////////////////
// AREA CONFIGURATION
//
	var MAX_DISTINC = 200;
	var AREAX = 800;
	var AREAY = 600;
	var COLORS_APPROACH = "gradient"; // fix, random, gradient
	var PARAM1 = "axis1";
	var PARAM2 = "axis1";
	var AREA_TITLE = "";

///////////////////////////////////////////////////////////////////
// FIELDS CONFIGURATIONS:
//
// -> the index are the machine-names for each field (only alphanumeric characters)/ Also used in var DATA
// -> human : human name for the field
// -> filter: 0 no eligible for filtering | 1 eligible for filtering
// -> role: "hide" to hide the parameter in the supertable.

var FIELDS = [
	{
		"id": 
			{ human: "My ID", areafilter: "0", role:"table"},
		"title": 
			{ human: "My Title", areafilter: "1", role:"table-area"},
		"author": 
			{ human: "Authors", areafilter: "1", role:"table-area"},
		"url": 
			{ human: "PDF", areafilter: "1", role:"table-area"},
                "Identifier":
			{ human: "Identifier", areafilter: "1", role:"hide"},
                "topic1": 
			{ human: "Matrix Issues", areafilter: "1", role:"table-area"},
		"topic2": 
			{ human: "Policies and Games", areafilter: "1", role:"table-area"},
		"topic3": 
			{ human: "Images and Neural Network", areafilter: "1", role:"table-area"},
		"topic4": 
			{ human: "Experiments", areafilter: "1", role:"table-area"},
                "topic5": 
			{ human: "Definitions", areafilter: "1", role:"table-area"},
                "topic6": 
			{ human: "Optimisation", areafilter: "1", role:"table-area"},
                "topic7": 
			{ human: "Probabilistic Models", areafilter: "1", role:"table-area"},
                "topic8": 
			{ human: "Discussion", areafilter: "1", role:"table-area"},
                "topic9": 
			{ human: "Topic and Latent Variable Models", areafilter: "1", role:"table-area"},
		"topic10":
			{ human: "Theory", areafilter: "0", role:"table-area"},
		"axis1": 
			{ human: "My axis 1", areafilter: "1", role:"category-area"},
		"a1": 
			{ human: "My A1", areafilter: "0", role:"subcategory"},
		"a2": 
			{ human: "My A2", areafilter: "0", role:"subcategory"},
		"axis2": 
			{ human: "My axis 2", areafilter: "1", role:"category-area"},
		"b1": 
			{ human: "My B1", areafilter: "0", role:"subcategory"},
		"b2": 
			{ human: "My B2", areafilter: "0", role:"subcategory"},
		"b3": 
			{ human: "My B3", areafilter: "0", role:"subcategory"},
		"axis3": 
			{ human: "My axis 3", areafilter: "1", role:"category-area"},
		"c1": 
			{ human: "My C1", areafilter: "0", role:"subcategory"},
		"c2": 
			{ human: "My C2", areafilter: "0", role:"subcategory"},
		"axis4": 
			{ human: "My axis 4", areafilter: "1", role:"category-area"},
		"d1": 
			{ human: "My D1", areafilter: "0", role:"subcategory"},
		"d2": 
			{ human: "My D2", areafilter: "0", role:"subcategory"},
		"d3": 
			{ human: "My D3", areafilter: "0", role:"subcategory"},
		"axis5": 
			{ human: "My axis 5", areafilter: "1", role:"category-area"},
		"e1": 
			{ human: "My E1", areafilter: "0", role:"subcategory"},
		"e2": 
			{ human: "My E2", areafilter: "0", role:"subcategory"},
		"e3": 
			{ human: "My E3", areafilter: "0", role:"subcategory"},
		"e4": 
			{ human: "My E4", areafilter: "0", role:"subcategory"},
		"e5": 
			{ human: "My E5", areafilter: "0", role:"subcategory"}
	}
];

var SUPERLIST_CATEGORIES = [
	{
	"axisname": 
		"axis1",
		"values" : 
			[
				{"code": "a1"},
				{"code": "a2"}
			]
	},
	{
	"axisname":
		"axis2",
		"values" : 
			[
				{"code": "b1"},
				{"code": "b2"},
				{"code": "b3"}
			]
	},
	{
	"axisname": 
		"axis3",
		"values" : 
			[
				{"code": "c1"},
				{"code": "c2"}
	   		]
	},
	{
	"axisname":
		"axis4",
		"values" : 
			[
				{"code": "d1"},
				{"code": "d2"},
				{"code": "d3"}
			]
	},
	{
	"axisname":
		"axis5",
		"values" : 
			[
				{"code": "e1"},
				{"code": "e2"},
				{"code": "e3"},
				{"code": "e4"},
				{"code": "e5"}
			]
	}
];

