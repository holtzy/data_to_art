function plotStackedbar(){


// ======================= //
// DATA
// ======================= //

// List of groups = List of Mental Disorder = Order on stacked barplot
var groups = ["Any Disorder","Substance Use","Intellectual Disabilities", "Eating Disorders","Schizophrenia","Personality Disorders", "Behavioral Disorders", "Neurotic Disorders","Mood Disorders",  "Organic Disorders", "Developmental Disorders"]

// List of subgroups
var subgroups = ["Natural Causes","Unnatural Causes"]

// MALES
data_filteredM = data_LYL
  .filter(function(d){ return d.sex == "Males" })
  .sort(function(a,b) {
    return groups.indexOf( a.mentalDis ) > groups.indexOf( b.mentalDis );
  });
//stack the data? --> stack per subgroup
var stackedDataMales = d3.stack()
  .keys(subgroups)
  (data_filteredM)

// FEMALES
data_filteredF = data_LYL
  .filter(function(d){ return d.sex == "Females" })
  .sort(function(a,b) {
    return groups.indexOf( a.mentalDis ) > groups.indexOf( b.mentalDis );
  });
//stack the data? --> stack per subgroup
var stackedDataFemales = d3.stack()
  .keys(subgroups)
  (data_filteredF)





// ======================= //
// SVG AREAS
// ======================= //

// set the dimensions and margins of the graph
var margin = {top: 100, right: 30, bottom: 90, left: 150},
    width = 600 - margin.left - margin.right,
    height = 560 - margin.top - margin.bottom;

// set the dimensions and margins of the graph
var marginBar = {top: 100, right: 30, bottom: 90, left: 75},
    widthBar = 560 - marginBar.left - marginBar.right,
    heightBar = 560 - marginBar.top - marginBar.bottom;

// svg = for the stacked Barchart
var svg = d3.select("#my_stackedBar")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("overflow", "visible")
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// And this is for the barplot
var svgBar = d3.select("#my_stackedBarFocus")
  .append("svg")
    .attr("width", widthBar + marginBar.left + marginBar.right)
    .attr("height", heightBar + marginBar.top + marginBar.bottom)
  .append("g")
    .attr("transform",
          "translate(" + marginBar.left + "," + marginBar.top + ")");






// ======================= //
// X AXIS AND SCALE
// ======================= //

// Add X axis for stacked bar
var x = d3.scaleLinear()
  .domain([0, 15])
  .range([0, width])

// Add X axis for Barchart
var xBar = d3.scaleBand()
  .range([ 0, width ])
  .domain(bothCOD)
  .padding(0.2);

// A scale to add padding between groups
var gap = 25
var gaps = [0, gap, gap, gap, gap, gap*2, gap*2, gap*2, gap*2, gap*2, gap*2, gap*2, gap*2, gap*2 ]
var myPaddingBar = d3.scaleOrdinal()
  .domain(bothCOD)
  .range(gaps);



// ======================= //
// Y AXIS AND SCALE
// ======================= //

// Add Y axis
var y = d3.scaleBand()
    .domain(groups)
    .range([ 0, height ])
    .padding([0.4])

// A scale to add padding between groups
var gap = 30
var gaps = [0, gap, gap, gap, gap, gap, gap, gap, gap, gap, gap ]
var myPadding = d3.scaleOrdinal()
  .domain(groups)
  .range(gaps);

// For barplot
var yBar = d3.scaleLinear()
  .domain([-10, 15])
  .range([height, 0])
// svgBar.append("g")
//     .call(d3.axisLeft(yBar))





// ======================= //
// TOOLTIP
// ======================= //

// create a tooltip
var tooltip = d3.select("#my_stackedBar")
  .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("font-size", "16px")
    .style("max-width", "250px")
    .style("min-width", "250px")


// Three function that change the tooltip when user hover / move / leave a cell
var mouseover = function(d) {
  var subgroupName = d3.select(this.parentNode).datum().key;
  tooltip
      .html(
        "<span style='color:grey'>Years of Life Lost: </span>" + Math.round((d.data["Natural Causes"]+d.data["Unnatural Causes"])*10)/10 + "<br>" +
        "<span style='color:grey'>Natural: </span>" + Math.round(d.data["Natural Causes"]*10)/10 + " - " +   "<span style='color:grey'>Unnatural: </span>" + Math.round(d.data["Unnatural Causes"]*10)/10 +
        "<br><br>" +
        "Click the bar for more details"
        // // "Being diagnosed with " + d.data.mentalDis + " results in " + Math.round((d.data["Natural Causes"]+d.data["Unnatural Causes"])*10)/10 + " Years of life lost" + "<br>" +
        // "<ul><li>" + Math.round(d.data["Natural Causes"]*10)/10 + " years are lost due to natural causes of death</li><li>" + Math.round(d.data["Unnatural Causes"]*10)/10 + " to Unnatural causes of death</li></ul>" +
        )
      .style("opacity", 1)
}
var mousemove = function(d) {
  tooltip
    .style("top", d3.mouse(this)[1]+40+"px" )
    .style("left", d3.mouse(this)[0]+200+"px")
}
var mouseleave = function(d) {
  tooltip
    .style("opacity", 0)
}


var mouseclick = function(d) {
  // What is the mentalDisorder
  mentalDis = d.data.mentalDis
  // Highlight the selected mental disorder
  d3.selectAll(".myRect")
    .transition()
    .duration(1000)
    .style("opacity", .1)
  d3.selectAll("." + d.data.mentalDis.replace(/\s/g, ''))
    .transition()
    .duration(1000)
    .style("opacity",1)

  // Remove the empty tab on the left to put stack chart on the left
  d3.select("#myGhostCol")
    .style("display", "none")
  // Make bar chart visible
  d3.select("#my_stackedBarFocus")
    .style("display", "inline")
  // Build the barplot for the good group
  updateBar(d.data.mentalDis)
}



// ======================= //
// BARS OF STACKED BARPLOT
// ======================= //

function updateStackedBar(){

  // Recover the SEX option?
  selectedSexOption = $("input[name='controlBarSex']:checked").val();
  if( selectedSexOption == "males" ){
    dataToUse = stackedDataMales
  }else{
    dataToUse = stackedDataFemales
  }

  // remove all bars
  d3.selectAll(".myRect").remove()

  // Show the bars
  var allBars = svg.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(dataToUse)
    .enter().append("g")
      .attr("fill", function(d) { return myColorCOD(d.key); })
      .style("opacity", 1)
      .attr("stroke", function(d) { return myColorCOD(d.key); })
    .selectAll(".myRect")
      .data(function(d) { return d; })

    allBars  // enter a second time = loop subgroup per subgroup to add all rectangles
      .enter()
      .append("rect")
        .attr("class", function(d){return "myRect " + d.data.mentalDis.replace(/\s/g, '')})
        .attr("y", function(d) { return y(d.data.mentalDis)+myPadding(d.data.mentalDis) } )
        .attr("height", y.bandwidth())
        .attr("x", function(d) {  return x(d[0]); })
        .attr("width", function(d) { return Math.abs(x(d[1]) - x(d[0])); })
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      .on("click", mouseclick)


}

updateStackedBar()






// ======================= //
// BARS OF BARPLOT
// ======================= //

// Initialize the bars
svgBar
  .selectAll(".myBarsBarplot")
  .data(bothCOD)
    .enter()
    .append("rect")
      .attr("x", function(d) { return (xBar(d)+myPaddingBar(d)) })
      .attr("height",0)
      .attr("y",yBar(0))
      .attr("class", "myBarsBarplot")
      .attr("fill", function(d){return myColorCOD(d)})
      .attr("rx", "2")
      .attr("ry", "2")
      .attr("width", xBar.bandwidth())

// Initialize the labels
svgBar
  .selectAll(".myLabelsBarplot")
  .data(bothCOD)
    .enter()
    .append("text")
      .attr("class", "myLabelsBarplot")
      .attr("x", 0)
      .attr("y", 0)
      .text(function(d){ return d })
      .attr('fill', function(d){
        if( typeCOD.includes(d)){
          return 'black'
        }else{
          return "grey"}
      })
      .attr('transform', function(d){ return 'translate( '+ (xBar(d)+myPaddingBar(d)+xBar.bandwidth()/2) +' , '+ (yBar(0)+10) +'),'+ 'rotate(-90)' })
      .style("opacity", 0)

// Initialize the numbers
svgBar
  .selectAll(".myNumbersBarplot")
  .data(bothCOD)
    .enter()
    .append("text")
      .attr("class", "myNumbersBarplot")
      .attr("x", function(d){return (xBar(d)+myPaddingBar(d)+xBar.bandwidth()/2) })
      .attr("y", yBar(0))
      .style("opacity", 0)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("font-size", 10)



// update the barplot
function updateBar(mentalDis){

  // Recover the SEX option?
  selectedSexOption = $("input[name='controlBarSex']:checked").val();
  if( selectedSexOption == "males" ){
    dataToUse = data_filteredM
  }else{
    dataToUse = data_filteredF
  }

  // Get appropriatte data
  var dataBar = dataToUse
    .filter(function(d){return d.mentalDis == mentalDis})
    [0]
  dataBar
  delete dataBar.sex
  delete dataBar.mentalDis

  // First step: reformatting the data
  var data_long = [];
  for (i in bothCOD) {
    data_long.push({
      COD: bothCOD[i],
      value: dataBar[bothCOD[i]],
    });
  }

  //Bars
  svgBar
    .selectAll(".myBarsBarplot")
    .data(data_long)
    .transition()
    .duration(1000)
      .attr("height", function(d) { return Math.abs(yBar(d.value) - yBar(0)) })
      .attr("y", function(d) {
              if (d.value >= 0){
                  return yBar(d.value);
              } else {
                  return yBar(0);
              }
      })

  // Labels
  svgBar
    .selectAll(".myLabelsBarplot")
    .data(data_long)
    .transition()
    .duration(1000)
      .style("opacity", 1)
      .attr("text-anchor", (d)=>{
        if( d.value>=0 ){ return("end") }else{ return("start")} })
      .attr('transform', (d)=>{
        if( d.value>=0 ){
          return 'translate( '+ (xBar(d.COD)+myPaddingBar(d.COD)+xBar.bandwidth()/2) +' , '+ (yBar(0)+10) +'),'+ 'rotate(-90)'
        }else{
          return 'translate( '+ (xBar(d.COD)+myPaddingBar(d.COD)+xBar.bandwidth()/2) +' , '+ (yBar(0)-10) +'),'+ 'rotate(-90)'
        }
      })

  // Numbers
  svgBar
    .selectAll(".myNumbersBarplot")
    .data(data_long)
    .transition()
    .duration(1000)
      .style("opacity", 1)
      .attr("y",  (d)=>{
        if( d.value>=0 ){
          return yBar(d.value)-10
        }else{
          return yBar(d.value)+10
        }
      })
      .text(function(d){ return Math.round(d.value*10)/10 })


}



// ======================= //
// CLOSE BARPLOT
// ======================= //

var closeBarButton = svgBar
  .append("text")
    .attr("x", width)
    .attr("cy", 70)
    .html("&#10005;")
    .style("font-size", "22px")
    .style("cursor", "pointer")
    .on("click", function(){
      d3.select("#myGhostCol")
        .style("display", "inline")
      d3.select("#my_stackedBarFocus")
        .style("display", "none")
      d3.selectAll(".myRect")
        .transition()
        .duration(1000)
        .style("opacity",1)
    })


var closeBar = function(d) {
  console.log("okkkkkk")

}






// ======================= //
// LABELS ON TOP OF STACKED  BARS
// ======================= //

// Compute center of each bar of the first top group
var myMeans = []
for( i in  stackedDataMales){
  inter = stackedDataMales[i][0]
  mean = (inter[0] + inter[1]) / 2
  myMeans.push(mean)
}

// Add label
var topLabels = svg.selectAll("topLabels")
  .data(myMeans)
  .enter()
  .append("text")
    .attr("x", 0)
    .text(function(d,i){ grp=subgroups[i] ; return(grp)})
    .attr("y", 0)
    .style("fill", function(d,i){ grp=subgroups[i] ; return(myColorCOD(grp))})
    .style("font-size",12)
    .style("text-anchor", "start")
    .attr('transform', (d)=>{
          return 'translate( '+x(d)+' , '+0+'),'+ 'rotate(-45)';})
    .style("opacity", 1)





// ======================= //
// X AXIS
// ======================= //

xTickPos = [0,3,6,9,12]

// Vertical lines
svg.selectAll("xTicks")
  .data(xTickPos)
  .enter()
  .append("line")
    .attr("x1", function(d) { return x(d); })
    .attr("x2", function(d) { return x(d); })
    .attr("y1", 0 )
    .attr("y2", height+30)
    .attr("stroke", "#B0B0B0")
    .attr("stroke-width", 1)

// Special separation for the 0
svg
  .append("line")
    .attr("x1", x(0) )
    .attr("x2", x(0) )
    .attr("y1", 0 )
    .attr("y2", height+30)
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .style("stroke-dasharray", ("3, 3"))  // <== This line here!!

// Labels
svg.selectAll("xLabels")
  .data(xTickPos)
  .enter()
  .append("text")
    .attr("x", function(d) { return x(d); })
    .text(function(d){ return d} )
    .attr("y", height+30+12)
    .style("fill", "#B0B0B0")
    .style("font-size",12)
    .style("text-anchor", "middle")

// Title
svg.append("text")
    .attr("text-anchor", "end")
    .attr("x", width-70)
    .attr("y", height + 30+32)
    .text("Life Years Lost (LYL)");





`
`
// ======================= //
// Y LABELS ON LEFT SIDE
// ======================= //

// Add label
svg.selectAll("leftLabels")
  .data(groups)
  .enter()
  .append("text")
    .attr("x", -20)
    .attr("y", function(d){return y(d) + myPadding(d) + 12})
    .text(function(d){ return d })
    .style("fill", "grey")
    .style("font-size",14)
    .style("text-anchor", "end")




// ======================= //
// EVENT LISTENER TO SEX CHANGE
// ======================= //

// An event listener to the radio button for Lollipop SEX
d3.select("#controlBarSex").on("change", updateStackedBar)




// Close chart function
}

plotStackedbar()
