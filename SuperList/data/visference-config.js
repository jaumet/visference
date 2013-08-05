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
// 
// FILTERS -> this variable is used only for Superlist.
//    It defines the machine names for each category


var FIELDS = [
	{
		"id": 
			{ human: "My ID", filter: "0"},
		"title": 
			{ human: "My Title", filter: "1"},
		"topic1": 
			{ human: "My Topic 1", filter: "0"},
		"topic2": 
			{ human: "My Topic 2", filter: "1"},
		"topic3": 
			{ human: "My Topic 3", filter: "1"},
		"topic4": 
			{ human: "My Topic 4", filter: "1"},
		"topic5": 
			{ human: "My Topic 5", filter: "1"},
		"axis1": 
			{ human: "My axis 1", filter: "1"},
		"a1": 
			{ human: "My A1", filter: "0"},
		"a2": 
			{ human: "My A2", filter: "0"},
		"axis2": 
			{ human: "My axis 2", filter: "1"},
		"b1": 
			{ human: "My B1", filter: "0"},
		"b2": 
			{ human: "My B2", filter: "0"},
		"b3": 
			{ human: "My B3", filter: "0"},
		"axis3": 
			{ human: "My axis 3", filter: "1"},
		"c1": 
			{ human: "My C1", filter: "0"},
		"c2": 
			{ human: "My C2", filter: "0"},
		"axis4": 
			{ human: "My axis 4", filter: "1"},
		"d1": 
			{ human: "My D1", filter: "0"},
		"d2": 
			{ human: "My D2", filter: "0"},
		"d3": 
			{ human: "My D3", filter: "0"},
		"axis5": 
			{ human: "My axis 5", filter: "1"},
		"e1": 
			{ human: "My E1", filter: "0"},
		"e2": 
			{ human: "My E2", filter: "0"},
		"e3": 
			{ human: "My E3", filter: "0"},
		"e4": 
			{ human: "My E4", filter: "0"},
		"e5": 
			{ human: "My E5", filter: "0"}
	}
];

var SUPERLIST_FIELDS = [
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
		"id": "0","title": "Thurstonian B oltzmann Machines: Learning from Multiple Inequalities","topic1": 90,"topic2": 0,	"topic3": 0,
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
		"title": "bla bla bla tochastic Variational Inference",
		"topic1": 90,
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
		"title": "trala ra la te llekhe ra la te llekhe ra la te llekhe ",
		"topic1": 90,
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
		"title": "GyIhiuhi  UguyguygUuy bu yIhiuhi  UguyguygUuy bu ",
		"topic1": 50,
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
		"title": "Hui iheuhriug rwrwiuth ttotv euhriug rwrwiuth ttotv ",
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
		"id": "6",
		"title": "Oplpjih UYguyG yug yu iu  UYguyG yug yu iu  UYguyG yug yu iu ",
		"topic1": 30,
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
		"id": "0",
		"title": "Thurstonian B oltzmann Machines: Learning from Multiple Inequalities",
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
		"title": "bla bla bla tochastic Variational Inference",
		"topic1": 90,
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
		"id": "3",
		"title": "trala ra la te llekhe ra la te llekhe ra la te llekhe ",
		"topic1": 90,
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
		"id": "4",
		"title": "GyIhiuhi  UguyguygUuy bu yIhiuhi  UguyguygUuy bu ",
		"topic1": 50,
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
		"title": "Hui iheuhriug rwrwiuth ttotv euhriug rwrwiuth ttotv ",
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
		"id": "6",
		"title": "Oplpjih UYguyG yug yu iu  UYguyG yug yu iu  UYguyG yug yu iu ",
		"topic1": 30,
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
		"id": "0",
		"title": "Thurstonian B oltzmann Machines: Learning from Multiple Inequalities",
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
		"title": "bla bla bla tochastic Variational Inference",
		"topic1": 90,
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
		"id": "3",
		"title": "trala ra la te llekhe ra la te llekhe ra la te llekhe ",
		"topic1": 90,
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
		"id": "4",
		"title": "GyIhiuhi  UguyguygUuy bu yIhiuhi  UguyguygUuy bu ",
		"topic1": 50,
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
		"title": "Hui iheuhriug rwrwiuth ttotv euhriug rwrwiuth ttotv ",
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
		"id": "6",
		"title": "Oplpjih UYguyG yug yu iu  UYguyG yug yu iu  UYguyG yug yu iu ",
		"topic1": 30,
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
		"id": "0",
		"title": "Thurstonian B oltzmann Machines: Learning from Multiple Inequalities",
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
		"topic1": 20,
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
		"id": "2",
		"title": "bla bla bla tochastic Variational Inference",
		"topic1": 20,
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
		"id": "3",
		"title": "trala ra la te llekhe ra la te llekhe ra la te llekhe ",
		"topic1": 30,
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
		"id": "4",
		"title": "GyIhiuhi  UguyguygUuy bu yIhiuhi  UguyguygUuy bu ",
		"topic1": 30,
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
		"id": "5",
		"title": "Hui iheuhriug rwrwiuth ttotv euhriug rwrwiuth ttotv ",
		"topic1": 20,
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
		"id": "6",
		"title": "Oplpjih UYguyG yug yu iu  UYguyG yug yu iu  UYguyG yug yu iu ",
		"topic1": 10,
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
		"id": "0",
		"title": "Thurstonian B oltzmann Machines: Learning from Multiple Inequalities",
		"topic1": 80,
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
		"id": "1",
		"title": "An Adaptive Learning Rate for Stochastic Variational Inference",
		"topic1": 60,
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
		"id": "2",
		"title": "bla bla bla tochastic Variational Inference",
		"topic1": 50,
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
		"id": "3",
		"title": "trala ra la te llekhe ra la te llekhe ra la te llekhe ",
		"topic1": 30,
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
		"id": "4",
		"title": "GyIhiuhi  UguyguygUuy bu yIhiuhi  UguyguygUuy bu ",
		"topic1": 50,
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
		"title": "Hui iheuhriug rwrwiuth ttotv euhriug rwrwiuth ttotv ",
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
		"id": "6",
		"title": "Oplpjih UYguyG yug yu iu  UYguyG yug yu iu  UYguyG yug yu iu ",
		"topic1": 30,
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
