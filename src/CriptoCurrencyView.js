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

      d3.select(".cripto-currency-table-data")
          .append('tr')
          .html(`<td>${i+1}</td><td>${currentElement['currency']}</td><td>${currentElement['close']}$</td><td>${high}$</td><td>${ATH}</td><td>${currentElement['yearOpen']}$</td>`);
    }
  }

  static buildGraphic(criptoDataArray) {
    const margin = {top: 50, right: 50, bottom: 50, left: 50},
    width = 1450 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

    const data = criptoDataArray;
    const x = d3.scaleBand()
                  .range([0, width]);

    const y = d3.scaleLinear()
                  .range([height, 0]);

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

    svg.selectAll(".bar")
        .data(data)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) {return x(d.currency); })
        .attr("width", x.bandwidth() - 6)
        .attr("y", function(d) { return y(d.close + 3); })
        .attr("height", function(d) { return height - y(d.close); })



}
}
export default CriptoCurrencyView;
