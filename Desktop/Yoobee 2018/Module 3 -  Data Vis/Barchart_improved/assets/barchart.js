function makeChart (data, options) {

	var config = {
		width: 600,
		height: 300,
		margin: 50,
		selector: '.chart',
		duration: 2000,
		yTicks:4,
		yRange:[0,d3.max(data,d=>d.y)],
		colors:['royalblue','lightblue'],
		font:'Arial',
	};

	_(config).extend(options);
	console.log(config)




	var spacing = config.width/data.length;

	// var colGen = d3.scaleOrdinal(['olive','peachpuff','purple']);
	var colGen = d3.scaleLinear()
					.domain([0,data.length-1])
					.range(config.colors);

	var yScale = d3.scaleLinear()
					.domain(config.yRange)
					.range([config.height,0]);

	var yAxisGen = d3.axisLeft(yScale).ticks(config.yTicks);


	var chart = d3.select(config.selector)
				.attr('viewBox','0 0 '+(config.width+config.margin*2)+' '+(config.height+config.margin*2))
				.append('g')
				.attr('transform','translate('+config.margin+','+config.margin+')');

	var barGroups = chart.selectAll('g')
				.data(data)
				.enter()
				.append('g')
				.attr('transform',(d,i)=>'translate('+i*spacing+',0)');

	barGroups.append('rect')
			.attr('class','data-bar')
			.attr('width',spacing/2)
			.attr('height',0)
			.attr('y',config.height)
			.attr('x',spacing/4)
			.attr('fill',(d,i)=>colGen(i))
			.transition()
			.duration(config.duration)
			.attr('y',(d) => yScale(d.y))
			.attr('height',(d) => config.height - yScale(d.y));

	barGroups.append('text')
			.text((d) => d.x)
			.attr('y',config.height+20)
			.attr('x',spacing/2)
			.attr('text-anchor','middle');

	//axis
	chart.append('g')
		.call(yAxisGen);

	//tooltip
	var tooltip = chart.append('g')
						.attr('opacity',0);

	tooltip.append('rect')
		.attr('pointer-events','none')
		.attr('width',100)
		.attr('height',30)
		.attr('fill','rgba(0,0,0,0.3)');

	var tooltipText = tooltip.append('text')
						.text('bla')
						.attr('x',50)
						.attr('y',15)
						.attr('text-anchor','middle')
						.attr('alignment-baseline','middle');

	var dataBars = chart.selectAll('.data-bar');

	dataBars.on('mouseover',function(d){
		tooltipText.text(d.x + ' : '+ d.y);
		tooltip.attr('opacity',1);
	});

	dataBars.on('mouseout',function(d){

		tooltip.attr('opacity',0);
	});
			
	dataBars.on('mousemove',function(){
		var mousePos = d3.mouse(this.parentNode.parentNode);

		var xPos = mousePos[0];
		var yPos = mousePos[1];
		tooltip.attr('transform','translate('+xPos+','+yPos+')');
	});
	
}










