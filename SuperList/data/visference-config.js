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

var FIELDS = [
	{
		"id": 
			{ human: "My ID", areafilter: "0", role:"table"},
		"title": 
			{ human: "My Title", areafilter: "1", role:"table-area"},
		"authors": 
			{ human: "Authors", areafilter: "1", role:"table-area"},
		"topic1":
			{ human: "My Topic 1", areafilter: "0", role:"table-area"},
		"topic2": 
			{ human: "My Topic 2", areafilter: "1", role:"table-area"},
		"topic3": 
			{ human: "My Topic 3", areafilter: "1", role:"table-area"},
		"topic4": 
			{ human: "My Topic 4", areafilter: "1", role:"table-area"},
		"topic5": 
			{ human: "My Topic 5", areafilter: "1", role:"table-area"},
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



var DATA = [
	{
		"id": "0",
		"title": "Thurstonian B oltzmann Machines: Learning from Multiple Inequalities Learning from Multiple Inequalities",
		"authors": "jaumet nualart",
		"topic1": 90,
		"topic2": 0,
		"topic3": 0,
		"topic4": 70,
		"topic5": 30,
		"axis1": "a1",
		"axis2": "b3",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e1"
	},
	{
		"id": "1",
		"title": "An Adaptive Learning Rate for Stochastic Variational Inference",
		"authors": "jaumet",
		"topic1": 0,
		"topic2": 20,	
		"topic3": 20,
		"topic4": 100,
		"topic5": 30,
		"axis1": "a2",
		"axis2": "b3",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e2"
	},
	{
		"id": "2",
		"title": "bla bla bla tochastic Variational Inference","authors": "jaumet","topic1": 90,
		"topic2": 90,	
		"topic3": 0,
		"topic4": 10,
		"topic5": 30,
		"axis1": "a1",
		"axis2": "b2",	
		"axis3": "c1",
		"axis4": "d2",
		"axis5": "e3"
	},
	{
		"id": "3",
		"title": "trala ra la te llekhe ra la te llekhe ra la te llekhe ","authors": "jaumet","topic1": 90,
		"topic2": 90,	
		"topic3": 90,
		"topic4": 100,
		"topic5": 70,
		"axis1": "a2",
		"axis2": "b2",	
		"axis3": "c2",
		"axis4": "d2",
		"axis5": "e4"
	},
	{
		"id": "4",
		"title": "GyIhiuhi  UguyguygUuy bu yIhiuhi  UguyguygUuy bu ","authors": "jaumet","topic1": 50,
		"topic2": 70,	
		"topic3": 30,
		"topic4": 70,
		"topic5": 100,
		"axis1": "a2",
		"axis2": "b1",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e5"
	},
	{
		"id": "5",
		"title": "Hui iheuhriug rwrwiuth ttotv euhriug rwrwiuth ttotv ","authors": "jaumet","topic1": 0,
		"topic2": 0,	
		"topic3": 20,
		"topic4": 10,
		"topic5": 10,
		"axis1": "a2",
		"axis2": "b1",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e4"
	},
	{
		"id": "6",
		"title": "Oplpjih UYguyG yug yu iu  UYguyG yug yu iu  UYguyG yug yu iu ","authors": "jaumet","topic1": 30,
		"topic2": 30,	
		"topic3": 100,
		"topic4": 50,
		"topic5": 30,
		"axis1": "a2",
		"axis2": "b2",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e5"
	},
		{
		"id": "7",
		"title": "Thurstonian B oltzmann Machines: Learning from Multiple Inequalities","authors": "jaumet","topic1": 90,
		"topic2": 0,	
		"topic3": 0,
		"topic4": 70,
		"topic5": 30,
		"axis1": "a1",
		"axis2": "b3",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e1"
	},
	{
		"id": "8",
		"title": "An Adaptive Learning Rate for Stochastic Variational Inference","authors": "jaumet","topic1": 0,
		"topic2": 20,	
		"topic3": 20,
		"topic4": 100,
		"topic5": 30,
		"axis1": "a2",
		"axis2": "b3",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e2"
	},
	{
		"id": "9",
		"title": "bla bla bla tochastic Variational Inference","authors": "jaumet","topic1": 90,
		"topic2": 90,	
		"topic3": 0,
		"topic4": 10,
		"topic5": 30,
		"axis1": "a1",
		"axis2": "b2",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e3"
	},
	{
		"id": "10",
		"title": "trala ra la te llekhe ra la te llekhe ra la te llekhe ","authors": "jaumet","topic1": 90,
		"topic2": 90,	
		"topic3": 90,
		"topic4": 100,
		"topic5": 70,
		"axis1": "a2",
		"axis2": "b2",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e4"
	},
	{
		"id": "11",
		"title": "GyIhiuhi  UguyguygUuy bu yIhiuhi  UguyguygUuy bu ","authors": "jaumet","topic1": 50,
		"topic2": 70,	
		"topic3": 30,
		"topic4": 70,
		"topic5": 100,
		"axis1": "a2",
		"axis2": "b1",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e5"
	},
	{
		"id": "12",
		"title": "Hui iheuhriug rwrwiuth ttotv euhriug rwrwiuth ttotv ","authors": "jaumet","topic1": 0,
		"topic2": 0,	
		"topic3": 20,
		"topic4": 10,
		"topic5": 10,
		"axis1": "a2",
		"axis2": "b1",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e4"
	},
	{
		"id": "13",
		"title": "Oplpjih UYguyG yug yu iu  UYguyG yug yu iu  UYguyG yug yu iu ","authors": "jaumet","topic1": 30,
		"topic2": 30,	
		"topic3": 100,
		"topic4": 50,
		"topic5": 30,
		"axis1": "a2",
		"axis2": "b2",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e5"
	},
		{
		"id": "14",
		"title": "Thurstonian B oltzmann Machines: Learning from Multiple Inequalities","authors": "jaumet","topic1": 90,
		"topic2": 0,	
		"topic3": 0,
		"topic4": 70,
		"topic5": 30,
		"axis1": "a1",
		"axis2": "b3",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e1"
	},
	{
		"id": "15",
		"title": "An Adaptive Learning Rate for Stochastic Variational Inference","authors": "jaumet","topic1": 0,
		"topic2": 20,	
		"topic3": 20,
		"topic4": 100,
		"topic5": 30,
		"axis1": "a2",
		"axis2": "b3",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e2"
	},
	{
		"id": "16",
		"title": "bla bla bla tochastic Variational Inference","authors": "jaumet","topic1": 90,
		"topic2": 90,	
		"topic3": 0,
		"topic4": 10,
		"topic5": 30,
		"axis1": "a1",
		"axis2": "b2",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e3"
	},
	{
		"id": "17",
		"title": "trala ra la te llekhe ra la te llekhe ra la te llekhe ","authors": "jaumet","topic1": 90,
		"topic2": 90,	
		"topic3": 90,
		"topic4": 100,
		"topic5": 70,
		"axis1": "a2",
		"axis2": "b2",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e4"
	},
	{
		"id": "18",
		"title": "GyIhiuhi  UguyguygUuy bu yIhiuhi  UguyguygUuy bu ","authors": "jaumet","topic1": 50,
		"topic2": 70,	
		"topic3": 30,
		"topic4": 70,
		"topic5": 100,
		"axis1": "a2",
		"axis2": "b1",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e5"
	},
	{
		"id": "19",
		"title": "Hui iheuhriug rwrwiuth ttotv euhriug rwrwiuth ttotv ","authors": "jaumet","topic1": 0,
		"topic2": 0,	
		"topic3": 20,
		"topic4": 10,
		"topic5": 10,
		"axis1": "a2",
		"axis2": "b1",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e4"
	},
	{
		"id": "20",
		"title": "Oplpjih UYguyG yug yu iu  UYguyG yug yu iu  UYguyG yug yu iu ","authors": "jaumet","topic1": 30,
		"topic2": 30,	
		"topic3": 100,
		"topic4": 50,
		"topic5": 30,
		"axis1": "a2",
		"axis2": "b2",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e5"
	},
		{
		"id": "21",
		"title": "Thurstonian B oltzmann Machines: Learning from Multiple Inequalities","authors": "jaumet","topic1": 90,
		"topic2": 0,	
		"topic3": 0,
		"topic4": 70,
		"topic5": 30,
		"axis1": "a1",
		"axis2": "b3",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e1"
	},
	{
		"id": "22",
		"title": "An Adaptive Learning Rate for Stochastic Variational Inference","authors": "jaumet","topic1": 20,
		"topic2": 10,	
		"topic3": 50,
		"topic4": 60,
		"topic5": 60,
		"axis1": "a2",
		"axis2": "b3",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e2"
	},
	{
		"id": "23",
		"title": "bla bla bla tochastic Variational Inference","authors": "jaumet","topic1": 20,
		"topic2": 30,	
		"topic3": 70,
		"topic4": 50,
		"topic5": 10,
		"axis1": "a1",
		"axis2": "b2",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e3"
	},
	{
		"id": "24",
		"title": "trala ra la te llekhe ra la te llekhe ra la te llekhe ","authors": "jaumet","topic1": 30,
		"topic2": 30,	
		"topic3": 30,
		"topic4": 30,
		"topic5": 30,
		"axis1": "a2",
		"axis2": "b2",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e4"
	},
	{
		"id": "25",
		"title": "GyIhiuhi  UguyguygUuy bu yIhiuhi  UguyguygUuy bu ","authors": "jaumet","topic1": 30,
		"topic2": 40,	
		"topic3": 60,
		"topic4": 10,
		"topic5": 50,
		"axis1": "a2",
		"axis2": "b1",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e5"
	},
	{
		"id": "26",
		"title": "Hui iheuhriug rwrwiuth ttotv euhriug rwrwiuth ttotv ","authors": "jaumet","topic1": 20,
		"topic2": 20,	
		"topic3": 20,
		"topic4": 20,
		"topic5": 20,
		"axis1": "a2",
		"axis2": "b1",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e4"
	},
	{
		"id": "27",
		"title": "Oplpjih UYguyG yug yu iu  UYguyG yug yu iu  UYguyG yug yu iu ","authors": "jaumet","topic1": 10,
		"topic2": 10,	
		"topic3": 10,
		"topic4": 10,
		"topic5": 10,
		"axis1": "a2",
		"axis2": "b2",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e5"
	},
		{
		"id": "28",
		"title": "Thurstonian B oltzmann Machines: Learning from Multiple Inequalities","authors": "jaumet","topic1": 80,
		"topic2": 90,	
		"topic3": 90,
		"topic4": 90,
		"topic5": 90,
		"axis1": "a1",
		"axis2": "b3",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e1"
	},
	{
		"id": "29",
		"title": "An Adaptive Learning Rate for Stochastic Variational Inference","authors": "jaumet","topic1": 60,
		"topic2": 20,	
		"topic3": 30,
		"topic4": 40,
		"topic5": 100,
		"axis1": "a2",
		"axis2": "b3",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e2"
	},
	{
		"id": "30",
		"title": "bla bla bla tochastic Variational Inference","authors": "jaumet","topic1": 50,
		"topic2": 50,	
		"topic3": 25,
		"topic4": 10,
		"topic5": 10,
		"axis1": "a1",
		"axis2": "b2",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e3"
	},
	{
		"id": "31",
		"title": "trala ra la te llekhe ra la te llekhe ra la te llekhe ","authors": "jaumet","topic1": 30,
		"topic2": 40,	
		"topic3": 50,
		"topic4": 60,
		"topic5": 100,
		"axis1": "a2",
		"axis2": "b2",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e4"
	},
	{
		"id": "32",
		"title": "GyIhiuhi  UguyguygUuy bu yIhiuhi  UguyguygUuy bu ","authors": "jaumet","topic1": 50,
		"topic2": 70,	
		"topic3": 30,
		"topic4": 70,
		"topic5": 100,
		"axis1": "a2",
		"axis2": "b1",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e5"
	},
	{
		"id": "33",
		"title": "Hui iheuhriug rwrwiuth ttotv euhriug rwrwiuth ttotv ",
		"authors": "jaumet",
		"topic1": 0,
		"topic2": 0,	
		"topic3": 20,
		"topic4": 10,
		"topic5": 10,
		"axis1": "a2",
		"axis2": "b1",	
		"axis3": "c2",
		"axis4": "d3",
		"axis5": "e4"
	},
	{
		"id": "34",
		"title": "Oplpjih UYguyG yug yu iu  UYguyG yug yu iu  UYguyG yug yu iu ","authors": "jaumet","topic1": 30,
		"topic2": 30,	
		"topic3": 100,
		"topic4": 50,
		"topic5": 30,
		"axis1": "a2",
		"axis2": "b2",	
		"axis3": "c1",
		"axis4": "d3",
		"axis5": "e5"
	}
]
