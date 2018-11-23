//View
//Представление CriptoCurrencyView взаимодействует с DOM
'use strict';
import * as d3 from 'd3';
class CriptoCurrencyView {
  constructor() {
  }
  static buildTable(criptoDataArray) {
    for(var i = 0; i < criptoDataArray.length; i++) {
      let ATH,
          high,
          currentElement = criptoDataArray[i];

      if(criptoDataArray[i].high) {
        high = currentElement['high'];
        ATH = (criptoDataArray[i].close > criptoDataArray[i].high) ?
       '100%' :
       (Math.round(criptoDataArray[i].close * 10000 / high)/100) + "%";
     } else {
       ATH = '100%';
       high = ''
     }


      d3.select(".cripto-currency-table-data").append('tr').html(`<td>${i+1}</td><td>${currentElement['currency']}</td><td>${currentElement['close']}$</td><td>${high}$</td><td>${ATH}</td><td>${currentElement['yearOpen']}$</td>`);
    }
  }

  static buildGraphic(criptoDataArray) {
    const margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 1450 - margin.left - margin.right,
    height = 664 - margin.top - margin.bottom;

    const data = criptoDataArray;
    const x = d3.scaleBand()
                  .range([0, width]);

    const y = d3.scaleLinear()
                  .range([height, 0]);
/*
    const xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

    const yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(formatPercent);

    const tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
          return "<strong>Frequency:</strong> <span style='color:red'>" + d.close + "</span>";
        })*/
    const svg = d3.select("#graphics-page").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");




    x.domain(data.map(function(d) { return d.currency; }));
    y.domain([0, d3.max(data, function(d) { return d.close; })]);

    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

    svg.append("g")
    .call(d3.axisLeft(y));

/*
    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");
*/
    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) {return x(d.currency); })
        .attr("width", x.bandwidth() - 10)
        .attr("y", function(d) { return y(d.close + 5); })
        .attr("height", function(d) { return height - y(d.close); })
        // .on('mouseover', tip.show)
        // .on('mouseout', tip.hide)
    /*const margin = {
      top: 50,     //vh
      right: 50,   //vw
      bottom: 50,  //vh
      left: 50     //vw
    };
    const width = 90 - margin.right - margin.left;
    const height = 87 - margin.top - margin.bottom;
    const barHeight = 10;
    const barOffset = 1;
    d3.scaleLinear()
      .domain([0, 5000])
      .range([0, width])

      const svg = d3.select('#graphics-page').append('svg')
          .attr("width", (width + margin.left + margin.right) + "vw")
          .attr("height", (height + margin.top + margin.bottom) + "vh")
          .style("margin",'1vh 5vw')
        .append("g");

        const bars = svg.selectAll(".bar").data(criptoDataArray);

        bars.exit().remove();
       bars
        .attr("width", d => d.close)
        .attr('y', (d,n) => n * 1);

        const barAdd = bars
          .enter()
            .append("rect")
              .attr("class", "bar")
              .attr('height', barHeight);
          //Update values and bars
        barAdd
          .merge(bars)
            .transition()
              .duration(1000)
              .attr("width", d => d.close)
              .attr('y', (d,n) => n * barHeight + n * barOffset);
  }*/

}
}
export default CriptoCurrencyView;
