import * as d3 from "d3";

const data = [25, 30, 45, 60, 20, 65, 75];

const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");
const margin = { top: 30, right: 30, bottom: 40, left: 40 };

const xScale = d3
  .scaleBand()
  .domain(d3.range(data.length))
  .range([margin.left, width - margin.right])
  .padding(0.1);

const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data)])
  .range([height - margin.bottom, margin.top]);

svg
  .selectAll(".bar")
  .data(data)
  .join("rect")
  .attr("class", "bar")
  .attr("x", (d, i) => xScale(i))
  .attr("y", d => yScale(d))
  .attr("height", d => yScale(0) - yScale(d))
  .attr("width", xScale.bandwidth());
