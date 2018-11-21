"use strict";
import httpGet from './getData.js';
import * as d3 from 'd3';


httpGet("https://api.nomics.com/v1/dashboard?key=ca9591ddb4080432e2d6a9a9d45d25af")
.then(response => {
    let data = response;

  });
  d3.select("#graphic")
      .append("svg")
      .attr("width", 600)
      .attr("height", 400)
      .append("rect")
      .attr("width", 400)
      .attr("height", 200)
      .style("fill", "red");
