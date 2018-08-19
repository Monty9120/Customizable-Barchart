
var skills = [
	{x:'HTML',y:70},
	{x:'CSS',y:75},
	{x:'JS',y:90},
	{x:'Design',y:80},
	{x:'UX',y:60},
	{x:'Proposal',y:40},
	{x:'HTML',y:70},
	{x:'CSS',y:75},
	{x:'JS',y:90},
	{x:'Design',y:80},
	{x:'UX',y:60},
	{x:'Proposal',y:40},

];

makeChart(skills,{
	width:800,
	yRange:[0,100]
});


var things = [
	{x:'HTML',y:70},
	{x:'CSS',y:75},
	{x:'JS',y:90},
	{x:'Design',y:80},
	{x:'UX',y:60},

];

makeChart(things,{
	width:1000,
	margin:80,
	selector:'.another-chart',
	duration:3000,
	yTicks:5,
	colors:['silver','gold']

});











