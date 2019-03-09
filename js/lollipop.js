function plotLoli(){

// ======================= //
//  SVG AREAS
// ======================= //

// set the dimensions and margins of the graph
var margin = {top: 70, right: 30, bottom: 100, left: 190},
    width = 810 - margin.left - margin.right,
    height = 650 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_loli")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");






// ======================= //
// X AXIS
// ======================= //

// Add X axis
var x = d3.scaleLinear()
  .domain([0, 20])
  .range([ 0, width]);
var xAxis = svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x).tickSize(0)  .ticks(5))
xAxis.select(".domain").remove()

// vertical lines
svg.selectAll(".tick line").attr("stroke", "#B0B0B0")
xTickPos = [0,5,10,15,20,25,30,35,40]
var verticalLines = svg.selectAll("xTicks")
  .data(xTickPos)
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(d); })
    .attr("x2", function(d) { return x(d); })
    .attr("y1", height-20 )
    .attr("y2", -20)
    .attr("stroke", "#B0B0B0")

// Vert line value = 1
svg
  .append("line")
    .attr("x1", function(d) { return x(1); })
    .attr("x2", function(d) { return x(1); })
    .attr("y1", -20 )
    .attr("y2", height-20)
    .attr("stroke", "orange")
    .style("stroke-dasharray", ("8, 6"))
svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + 30)
    .text("Mortality Rate Ratio");

// Add X axis title:
svg.append("text")
    .attr("text-anchor", "center")
    .attr("x", x(0))
    .attr("y", -25)
    .text("MRR = 1")
    .style("fill", "orange")





// ======================= //
// Y AXIS
// ======================= //

// Y 'axis': prepare position of each group
var smallGap = 30
var bigGap = 60
var posYaxis = [0, bigGap, bigGap+smallGap, bigGap+smallGap*2, bigGap+smallGap*3, bigGap*2+smallGap*3, bigGap*2+smallGap*4, bigGap*2+smallGap*5, bigGap*2+smallGap*6, bigGap*2+smallGap*7, bigGap*2+smallGap*8, bigGap*2+smallGap*9, bigGap*2+smallGap*10, bigGap*2+smallGap*11 ]

// Add the labels
var myYLabels = svg.selectAll("myYLabels")
  .data(posYaxis)
  .enter()
  .append("text")
    .attr('x', -30)
    .attr('y', function(d,i){return posYaxis[i]})
    .text( function(d,i){return bothCOD[i]})
    .attr("text-anchor", "end")
    .style("font-size", 14)
    .style("fill", 'grey')
    .attr('class', function(d,i){ cod = bothCOD[i] ; if( typeCOD.includes(cod)){return 'myMainLabel'} })
    .style('alignment-baseline', 'middle')

// Custom labels of main groups
svg.selectAll('.myMainLabel')
    .style("font-size", 16)
    .style("fill", 'black')
    .attr('x', -50)

// Horizontal bars
yTickPos = [0, bigGap, bigGap*2+smallGap*3]
svg.selectAll("yTicks")
  .data(yTickPos)
  .enter()
  .append("line")
    .attr("x1", -30)
    .attr("x2", width)
    .attr("y1", function(d) { return d })
    .attr("y2", function(d) { return d })
    .attr("stroke", "#B0B0B0")


// Color scale for dots
var myColorLolliSex = d3.scaleOrdinal()
  .domain(["both", "men", "women"])
  .range(["steelblue", "#1E8F89", "#EE5A45"])

// Scale to slightly modify sexes on the Y axis
var myPositionLolliSex = d3.scaleOrdinal()
  .domain(["both", "men", "women"])
  .range([0, -3, 3])




// ======================= //
// BUILD BUTTON
// ======================= //

// Add the option any disorder manually
d3.select("#controlLolliDisorder")
  .append('option')
  .text("Any Disorder") // text showed in the menu
  .attr("value", "Any Disorder") // corresponding value returned by the button
// Add vertical separation
d3.select("#controlLolliDisorder")
  .append('hr')
// add the options to the button
d3.select("#controlLolliDisorder")
  .selectAll('myOptions')
  .data(allDisorder.filter(function(d){return d!="Any Disorder"}))
  .enter()
  .append('option')
  .text(function (d) { return d }) // text showed in the menu
  .attr("value", function (d) { return d; }) // corresponding value returned by the button



// ======================= //
// TOOLTIP
// ======================= //

// create a tooltip
var tooltip = d3.select("#my_loli")
  .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("font-size", "16px")

// Three function that change the tooltip when user hover / move / leave a cell
var mouseover = function(d) {
  console.log("kesako")
  tooltip
    .transition()
    .duration(200)
    .style("opacity", 1)
  tooltip
      .html("<span style='color:grey'>M. Disorder: </span>" + d.mentalDis + "<br>" + "<span style='color:grey'>Cause of death: </span>" + d.COD + "<br>" + "MRR: " + Math.round(d.MRR*100)/100 + " [" + Math.round(d.MRR_left*100)/100 + "-" + Math.round(d.MRR_right*100)/100 + "]" + "<br>" + "<span style='color:grey'>Sex: </span>" + d.sex) // + d.Prior_disorder + "<br>" + "HR: " +  d.HR)
      .style("top", (event.pageY)+"px")
      .style("left",(event.pageX+20)+"px")
}
var mousemove = function(d) {
  tooltip
    .style("top", (event.pageY)+"px")
    .style("left",(event.pageX+20)+"px")
}
var mouseleave = function(d) {
  tooltip
    .transition()
    .duration(200)
    .style("opacity", 0)
}




// ======================= //
// INTERACTIVITY
// ======================= //

// Function that update the chart for a disorder
function updateChart(selectedGroup, selectedSex) {

  // Recover the SEX option?
  selectedSexOption = $("input[name='controlLolliSex']:checked").val();

  // Recover the Mental Disorder option?
  var selector = document.getElementById('controlLolliDisorder');
  var selectedMentalDisOption = selector[selector.selectedIndex].value;

  // Create the filtered dataset
  var selectedData = data_MRR.filter(function(d){ return d.mentalDis == selectedMentalDisOption })
  if(selectedSexOption == "both"){
    selectedData = selectedData.filter(function(d){ return d.sex == "both" })
  }else{
    selectedData = selectedData.filter(function(d){ return d.sex != "both" })
  }

  // What is the upper limit of the axis?
  if(selectedMentalDisOption=="Substance Use"){
    upperLimit = 35
  }else{
    upperLimit = 20
  }

  // Update the axis
  x.domain([0,upperLimit])
  xAxis
    .transition()
    .duration(1000)
    .call(d3.axisBottom(x).tickSize(0)  .ticks(5))
  xAxis.select(".domain").remove()

  // Update vertical bars
  verticalLines
    .transition()
    .duration(1000)
      .attr("x1", function(d) { return x(d); })
      .attr("x2", function(d) { return x(d); })


  // Update circle position
  var u = svg.selectAll(".myLolliCircles")
    .data(selectedData)
  u
    .enter()
    .append("circle")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
    .merge(u)
    .transition()
    .duration(1000)
      .attr("class", "myLolliCircles")
      .attr("cx", function(d) { return x(d.MRR); })
      .attr("cy", function(d) { id = bothCOD.indexOf(d.COD) ; return posYaxis[id] + myPositionLolliSex(d.sex) })
      .attr('r', function(d,i){ if(typeCOD.includes(d.COD)){size = 7}else{size=6} ; return size  })
      .style("fill", function(d){ return myColorLolliSex(d.sex) })
      .style("stroke", "black")
      .style("fill-opacity", 1)
      .style("stroke-width", 1)
  u
    .exit()
    .transition()
    .duration(1000)
    .style("opacity",0)
    .remove()


  // Add confidence interval
  var v = svg.selectAll(".myLolliCI")
    .data(selectedData)
  v
    .enter()
    .append("line")
    .merge(v)
    .transition()
    .duration(1000)
      .attr("class", "myLolliCI")
      .attr("x1", function(d) { return x(d.MRR_left); })
      .attr("x2", function(d) { return x(d.MRR_right); })
      .attr("y1", function(d) { id = bothCOD.indexOf(d.COD) ; return posYaxis[id] + myPositionLolliSex(d.sex) })
      .attr("y2", function(d) { id = bothCOD.indexOf(d.COD) ; return posYaxis[id] + myPositionLolliSex(d.sex) })
      .attr("stroke", "grey")
      .style('opacity', function(d,i){ if(typeCOD.includes(d.COD)){opacity = 1}else{opacity = .6} ; return opacity  })
  v
    .exit()
    .transition()
    .duration(1000)
    .style("opacity",0)
    .remove()

  }

// Listen to the mental disorder selection button
d3.select("#controlLolliDisorder").on("change", updateChart)

// An event listener to the radio button for Lollipop SEX
d3.select("#controlLolliSex").on("change", updateChart)


// Listen to the button to show Substance use., behavioral or organic
d3.select("#showSubstanceUse").on("click", function(){
  document.getElementById("controlLolliDisorder").value = "Substance Use"
  updateChart()
})
d3.select("#showOrganic").on("click", function(){
  document.getElementById("controlLolliDisorder").value = "Organic Disorders"
  updateChart()
})
d3.select("#showBehavioral").on("click", function(){
  document.getElementById("controlLolliDisorder").value = "Behavioral Disorders"
  updateChart()
})
// Run the updateChart function at loading
updateChart()


}

plotLoli()
