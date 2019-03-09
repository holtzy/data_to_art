function plotLine(){


// ======================= //
// DATA, SVG AREAS, GENERAL STUFF
// ======================= //

// Get filtered data
data_allGrouped = data_MRRage.filter(function(d){ return d.dx2 == "Any Disorder" & d.cod_label == "All Causes" & d.sex2 == "Persons" & d.specific > 15 & d.specific <= 90 })

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 50, left: 60},
    width = 460 - margin.left - margin.right,
    height = 440 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svgLeft = d3.select("#my_MR")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("overflow", "visible")
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// append the svg object to the body of the page
var svgRight = d3.select("#my_MRR")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("overflow", "visible")
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var mySexColor = d3.scaleOrdinal()
  .domain(["Persons", "Males", "Females"])
  .range(["steelblue", "#1E8F89", "#EE5A45"])





// ======================= //
// X AXIS
// ======================= //

// Add X axis
var x = d3.scaleLinear()
  .domain([5, 100 ])
  .range([ 0, width ]);
svgLeft.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));
svgRight.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add X axis labels:
svgLeft.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin.top + 30)
    .text("Age (in years)");
svgRight.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + margin.top + 30)
    .text("Age (in years)");





// ======================= //
// Y AXIS
// ======================= //

// Left: Add Y axis and scales
var yLeft = d3.scaleLog()
  .domain([1, 500000])
  .range([ height, 0 ]);
svgLeft.append("g")
  .call(d3.axisLeft(yLeft).ticks(5, ",").tickSizeOuter(0))

// Left Add Y axis labels:
svgLeft.append("text")
    .attr("text-anchor", "start")
    .attr("x", 10)
    .attr("y", 10)
    .text("Mortality rates")
svgLeft.append("text")
    .attr("text-anchor", "start")
    .attr("x", 10)
    .attr("y", 30)
    .text("per 100,000 person-years")
    .style("opacity", ".6")
svgLeft.append("text")
    .attr("text-anchor", "start")
    .attr("x", 10)
    .attr("y", 50)
    .text("(95% CI)")
    .style("opacity", ".6")


// Right: Add Y axis and scale
var yRight = d3.scaleLinear()
  .domain([0, 13])
  .range([ height, 0 ]);
svgRight.append("g")
  .call(d3.axisLeft(yRight).ticks(5).tickFormat(function(d) { return d; }).tickSizeOuter(0))

// Left Add Y axis labels:
svgRight.append("text")
    .attr("text-anchor", "start")
    .attr("x", 10)
    .attr("y", 10)
    .text("Mortality rate ratio")
svgRight.append("text")
    .attr("text-anchor", "start")
    .attr("x", 10)
    .attr("y", 30)
    .text("(95% CI)")
    .style("opacity", ".6")




// ======================= //
// LEGEND
// ======================= //

svgLeft
  .append("text")
  .text("Mental disorder")
  .attr("x", 343)
  .attr("y", 70)
  .attr("fill", mySexColor("both"))
svgLeft
  .append("text")
  .text("No diagnosis")
  .attr("x", 343)
  .attr("y", 102)
  .attr("fill", mySexColor("both"))
  .attr("opacity", .8)


// ======================= //
// CURVES BOTH SIDES
// ======================= //

function updateChart(data){

  // Nest the data = group per sex and COD
  var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
    .key(function(d){ return d.sex2;})
    .entries(data);

  // Add the diagnosed line
  var diagnosedLine = svgLeft
      .selectAll(".lineDiag")
      .data(sumstat)
  diagnosedLine
      .enter()
      .append("path")
      .merge(diagnosedLine)
      .transition()
      .duration(1000)
        .attr("class", "lineDiag")
        .attr("fill", "none")
        .attr("stroke", function(d){ return mySexColor(d.key) })
        .attr("stroke-width", 1.5)
        .style("opacity", 1)
        .attr("d", function(d){
          return d3.line()
            .x(function(d) { return x(d.specific) })
            .y(function(d) { return yLeft(d.diagnosed) })
            (d.values)
        })
  diagnosedLine
      .exit()
      .transition()
      .duration(1000)
      .style("opacity",0)
      .remove()


  // Add the UNdiagnosed line
  var undiagnosedLine = svgLeft
      .selectAll(".lineUndiag")
      .data(sumstat)
  undiagnosedLine
      .enter()
      .append("path")
      .merge(undiagnosedLine)
      .transition()
      .duration(1000)
        .attr("class", "lineUndiag")
        .attr("fill", "none")
        .attr("stroke", function(d){ return mySexColor(d.key) })
        .style("stroke-dasharray", ("3, 3"))
        .attr("stroke-width", 1.5)
        .style("opacity", 1)
        .attr("d", function(d){
          return d3.line()
            .x(function(d) { return x(d.specific) })
            .y(function(d) { return yLeft(d.undiagnosed) })
            (d.values)
        })
  undiagnosedLine
      .exit()
      .transition()
      .duration(1000)
      .style("opacity",0)
      .remove()


  // Add confindence interval
  var confidenceLine = svgRight
      .selectAll(".lineConfidence")
      .data(sumstat)
  confidenceLine
      .enter()
      .append("path")
      .merge(confidenceLine)
      .style("opacity", .5)
      .transition()
      .duration(1000)
        .attr("class", "lineConfidence")
        .attr("fill", function(d){ return mySexColor(d.key) })
        .attr("stroke", "none")
        .attr("stroke-width", 1.5)
        .attr("d", function(d){
          return d3.area()
          .x(function(d) { return x(d.specific) })
          .y0(function(d) { return yRight(d.left) })
          .y1(function(d) { return yRight(d.right) })
          (d.values)
        })
  confidenceLine
      .exit()
      .transition()
      .duration(1000)
      .style("opacity",0)
      .remove()




  // Add the MRR line
  var mrrLine = svgRight
      .selectAll(".lineMrr")
      .data(sumstat)
  mrrLine
      .enter()
      .append("path")
      .merge(mrrLine)
      .transition()
      .duration(1000)
        .attr("class", "lineMrr")
        .attr("fill", "none")
        .attr("stroke", function(d){ return mySexColor(d.key) })
        .attr("stroke-width", 1.5)
        .style("opacity", 1)
        .attr("d", function(d){
          return d3.line()
            .x(function(d) { return x(d.specific) })
            .y(function(d) { return yRight(d.irr) })
            (d.values)
        })
  mrrLine
      .exit()
      .transition()
      .duration(1000)
      .style("opacity",0)
      .remove()






  // ======================= //
  // ANNOTATION ON HOVER
  // ======================= //

  // This allows to find the closest X index of the mouse:
  var bisect = d3.bisector(function(d) { return d.specific; }).left;

  // Circle that travels along the curve of right chart
  var focusRight = svgRight.append('g')
    .append('circle')
      .style("fill", "none")
      .attr("stroke", "black")
      .attr('r', 8.5)
      .style("opacity", 0)

  // Text along the curve of right chart
  var textRight = svgRight.append('g')
    .append('text')
      .style("fill", "black")
      .style("opacity", 0)
      .attr("text-anchor", "middle")

  // Circle and text for left part
  var focusLeftTop = svgLeft.append('g')
    .append('circle')
      .style("fill", "black")
      .attr('r', 3.5)
      .style("opacity", 0)
  var textLeftTop = svgLeft.append('g')
    .append('text')
      .style("fill", "black")
      .style("opacity", 0)
      .attr("text-anchor", "end")
  var focusLeftBottom = svgLeft.append('g')
    .append('circle')
      .style("fill", "black")
      .attr('r', 3.5)
      .style("opacity", 0)
  var textLeftBottom = svgLeft.append('g')
    .append('text')
      .style("fill", "black")
      .style("opacity", 0)
      .attr("text-anchor", "start")

  // and the age
  var textLeftAge = svgLeft.append('g')
    .append('text')
      .style("fill", "black")
      .style("opacity", 0)
      .attr("text-anchor", "middle")

  // Create the Line that travels along both curves of left chart
  var focusLeftLine = svgLeft.append('g')
    .append('line')
      .style("stroke", "black")
      .style("opacity", 0)

  // Create 2 rect on top of each of the svg areas: this rectangle recovers mouse position
  svgRight.append('rect')
    .style("fill", "none")
    .style("pointer-events", "all")
    .attr('width', width)
    .attr('height', height)
    .on('mouseover', mouseover)
    .on('mousemove', mousemove)
    .on('mouseout', mouseout);

  svgLeft.append('rect')
    .style("fill", "none")
    .style("pointer-events", "all")
    .attr('width', width)
    .attr('height', height)
    .on('mouseover', mouseover)
    .on('mousemove', mousemove)
    .on('mouseout', mouseout);

  // What happens when the mouse move -> show the annotations at the right positions.
  function mouseover() {
    focusRight.style("opacity", 1)
    focusLeftTop.style("opacity", 1)
    focusLeftBottom.style("opacity", 1)
    focusLeftLine.style("opacity", 1)
    textLeftTop.style("opacity", 1)
    textLeftBottom.style("opacity", 1)
    textRight.style("opacity",1)
    textLeftAge.style("opacity",1)
  }

  function mousemove() {
    // recover coordinate we need
    var x0 = x.invert(d3.mouse(this)[0]);
    var i = bisect(data, x0, 1);
    selectedData = data[i]
    focusRight
      .attr("cx", x(selectedData.specific))
      .attr("cy", yRight(selectedData.irr))
    textRight
      .text(Math.round(selectedData.irr)+" %")
      .attr("x", function(){ if(selectedData.specific<35){
          return x(selectedData.specific)-25
        }else{
          return x(selectedData.specific)+25
      }})
      .attr("y", yRight(selectedData.irr))
    focusLeftTop
      .attr("cx", x(selectedData.specific))
      .attr("cy", yLeft(selectedData.undiagnosed))
    focusLeftBottom
      .attr("cx", x(selectedData.specific))
      .attr("cy", yLeft(selectedData.diagnosed))
    focusLeftLine
      .attr("x1", x(selectedData.specific))
      .attr("x2", x(selectedData.specific))
      .attr("y1", yLeft(selectedData.undiagnosed))
      .attr("y2", yLeft(selectedData.diagnosed))
    textLeftTop
      .text(Math.round(selectedData.diagnosed))
      .attr("x",x(selectedData.specific)-10)
      .attr("y", yLeft(selectedData.diagnosed))
    textLeftBottom
      .text(Math.round(selectedData.undiagnosed))
      .attr("x",x(selectedData.specific)+10)
      .attr("y", yLeft(selectedData.undiagnosed))
    textLeftAge
      .text("Age: " + selectedData.specific)
      .attr("x",x(selectedData.specific)+10)
      .attr("y", yLeft(selectedData.undiagnosed)+30 )
  }
  function mouseout() {
    focusRight.style("opacity", 0)
    focusLeftTop.style("opacity", 0)
    focusLeftBottom.style("opacity", 0)
    focusLeftLine.style("opacity", 0)
    textLeftTop.style("opacity", 0)
    textLeftBottom.style("opacity", 0)
    textRight.style("opacity",0)
    textLeftAge.style("opacity",0)
  }


// Close the updateChart function
}

// Initialise the chart
updateChart(data_allGrouped)



// close plotLine function
}
plotLine()
