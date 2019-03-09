function plotHeatmap(){



// ======================= //
// DATA, SVG AREAS
// ======================= //

// dimension LEFT
var marginLeft = {top: 30, right: 80, bottom: 130, left: 160},
  widthLeft = 500 - marginLeft.left - marginLeft.right,
  heightLeft = 540 - marginLeft.top - marginLeft.bottom;

// set the dimensions and margins of the graph
var marginRight = {top: 30, right: 160, bottom: 130, left: 10},
  widthRight = 500 - marginRight.left - marginRight.right,
  heightRight = 540 - marginRight.top - marginRight.bottom;

// append the svg object to the body of the page
var svgLeft = d3.select("#my_heatmap_left")
.append("svg")
  .attr("width", widthLeft + marginLeft.left + marginLeft.right)
  .attr("height", heightLeft + marginLeft.top + marginLeft.bottom)
.append("g")
  .attr("transform",
        "translate(" + marginLeft.left + "," + marginLeft.top + ")");

// append the svg object to the body of the page
var svgRight = d3.select("#my_heatmap_right")
.append("svg")
  .attr("width", widthRight + marginRight.left + marginRight.right)
  .attr("height", heightRight + marginRight.top + marginRight.bottom)
.append("g")
  .attr("transform",
        "translate(" + marginRight.left + "," + marginRight.top + ")");

// Labels of row and columns
var myGroups = bothCOD
var myVars = allDisorder





// ======================= //
// AXIS and SCALES
// ======================= //

// A scale to add padding between groups
var gap = 10
var gaps = [0, gap, gap, gap, gap, gap*2, gap*2, gap*2, gap*2, gap*2, gap*2, gap*2, gap*2, gap*2 ]
var myPadding = d3.scaleOrdinal()
  .domain(myGroups)
  .range(gaps);

// Build X scales:
var x = d3.scaleBand()
  .range([ 0, widthLeft ])
  .domain(myGroups)
  .padding(0.01);

// add the X Labels
var xLabels = svgLeft
  .selectAll("Xlabels")
  .data(bothCOD)
  .enter()
  .append("text")
    .text(function(d){ return d})
    .attr("x", 0)
    .attr("y", 0)
    .style("text-anchor", "end")
    .style("font-size", 14)
    .style("fill", 'grey')
    .attr("transform", function(d){ return( "translate(" + (x(d) + myPadding(d) + 18) + "," + (heightLeft+11) + ")rotate(-45)")})
    .attr('class', function(d,i){ cod = bothCOD[i] ; if( typeCOD.includes(cod)){return 'myMainLabel'} })

// add the X Labels
var xLabels = svgRight
  .selectAll("Xlabels")
  .data(bothCOD)
  .enter()
  .append("text")
    .text(function(d){ return d})
    .attr("x", 0)
    .attr("y", 0)
    .style("text-anchor", "end")
    .style("font-size", 14)
    .style("fill", 'grey')
    .attr("transform", function(d){ return( "translate(" + (x(d) + myPadding(d) + 18) + "," + (heightLeft+11) + ")rotate(-45)")})
    .attr('class', function(d,i){ cod = bothCOD[i] ; if( typeCOD.includes(cod)){return 'myMainLabel'} })

// Custom labels of main groups
d3.selectAll('.myMainLabel')
    .style("font-size", 16)
    .style("fill", 'black')
    .attr('x', -10)


// Build Y scales and axis:
var y = d3.scaleBand()
  .range([ heightLeft, 0 ])
  .domain(myVars)
  .padding(0.01);
var yAxis = svgLeft.append("g")
  .call(d3.axisLeft(y).tickSize(0))
yAxis.selectAll("text")
    .style("font-size", 14)
    .style("fill", 'grey')
yAxis.select(".domain").remove();



// Build color scales
var myColorMRR = d3.scaleSequential()
    .interpolator(d3.interpolateInferno)
    .domain([0,10])

var myColorLYL = d3.scaleSequential()
    .interpolator(d3.interpolateInferno)
    .domain([-3,10])





// ======================= //
// TITLE
// ======================= //

svgLeft
  .append("text")
  .text("Mortality Rate Ratios")
  .attr("x",70)
  .attr("y", -20)

svgRight
  .append("text")
  .text("Lost Years of Life")
  .attr("x",70)
  .attr("y", -20)


// ======================= //
// TOOLTIP
// ======================= //

// create a tooltip
var tooltipLeft = d3.select("#my_heatmap_left")
  .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("font-size", "16px")
// Three function that change the tooltip when user hover / move / leave a cell
var mouseoverLeft = function(d) {
  tooltipLeft
    .style("opacity", 1)
}
var mousemoveLeft = function(d) {
  tooltipLeft
      .html("<span style='color:grey'>M. Disorder: </span>" + d.mentalDis + "<br>" + "<span style='color:grey'>Cause of death: </span>" + d.COD + "<br>" + "MRR: " + Math.round(d.MRR*100)/100 + " [" + Math.round(d.MRR_left*100)/100 + "-" + Math.round(d.MRR_right*100)/100 + "]") // + d.Prior_disorder + "<br>" + "HR: " +  d.HR)
      .style("left", (d3.mouse(this)[0]+220) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
}
var mouseleaveLeft = function(d) {
  tooltipLeft
    .style("opacity", 0)
}



// create a tooltip
var tooltipRight = d3.select("#my_heatmap_right")
  .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("font-size", "16px")
// Three function that change the tooltip when user hover / move / leave a cell
var mouseoverRight = function(d) {
  tooltipRight
    .style("opacity", 1)

}
var mousemoveRight = function(d) {
  tooltipRight
      .html("<span style='color:grey'>M. Disorder: </span>" + d.mentalDis + "<br>" + "<span style='color:grey'>Cause of death: </span>" + d.COD + "<br>" + "LYL: " + Math.round(d.LYL*100)/100 ) // + d.Prior_disorder + "<br>" + "HR: " +  d.HR)
      .style("left", (d3.mouse(this)[0]+70) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
}
var mouseleaveRight = function(d) {
  tooltipRight
    .style("opacity", 0)
}




// ======================= //
// SHAPES
// ======================= //

// Prepare data
var data_MRR_filter = data_MRR.filter(function(d){ return d.sex == "women" })
var data_LYL_filter = data_LYL_long.filter(function(d){ return d.sex == "Females" })

// Add squares for MRR (LEFT)
svgLeft.selectAll()
    .data(data_MRR_filter)
    .enter()
    .append("rect")
      .attr("class", "MRR")
      .attr("x", function(d) { return x(d.COD)+myPadding(d.COD) })
      .attr("y", function(d) { return y(d.mentalDis) })
      .attr("width", x.bandwidth() )
      .attr("height", y.bandwidth() )
      .style("fill", function(d) { return myColorMRR(d.MRR)} )
      .attr("opacity", 1)
      .style("stroke-width", 0)
      .style("stroke", "white")
      .style("opacity", 1)
      .attr("rx", 0)
      .attr("ry", 0)
    .on("mouseover", mouseoverLeft)
    .on("mousemove", mousemoveLeft)
    .on("mouseleave", mouseleaveLeft)

// Add squares for LYL (RIGHT)
svgRight.selectAll()
    .data(data_LYL_filter)
    .enter()
    .append("rect")
      .attr("class", "LYL")
      .attr("x", function(d) { return x(d.COD)+myPadding(d.COD) })
      .attr("y", function(d) { return y(d.mentalDis) })
      .attr("width", x.bandwidth() )
      .attr("height", y.bandwidth() )
      .style("fill", function(d) { return myColorLYL(+d.LYL)} )
      .attr("opacity", 1)
    .on("mouseover", mouseoverRight)
    .on("mousemove", mousemoveRight)
    .on("mouseleave", mouseleaveRight)

}


// A function that shows MRR and hide LYL
function showMRR() {
  d3.selectAll(".MRR").transition().duration(1000).style("opacity",1)
  d3.selectAll(".LYL").transition().duration(1000).style("opacity",0)
}
function showLYL() {
  d3.selectAll(".MRR").transition().duration(1000).style("opacity",0)
  d3.selectAll(".LYL").transition().duration(1000).style("opacity",1)
}

// An event listener to the radio button
d3.select("#form").on("click", function(){
    var radioValue = $("input[name='controlHeatmapType']:active").val();
    if(radioValue == "MRR"){
      showMRR()
    } else {
      showLYL()
    }

})


plotHeatmap()
