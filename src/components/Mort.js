import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

import rawCsv from '../data'


const Mort = () => {

  const canvasRef = useRef(null);

    useEffect(() => {
      setContext()
    }, [])


  const setContext = () => {
    console.log(`component did mount`)
    const margin = { top: 20, right: 20, bottom: 30, left: 40 }
    const width = 960 - margin.left - margin.right
    const height = 500 - margin.top - margin.bottom
    const svg = d3.select(canvasRef.current).append('svg')
      .attr('height', '500px')
      .attr('width', '960px')
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)


    const x0 = d3.scaleBand()
      .rangeRound([0, width])
      .paddingInner(0.1)

    const x1 = d3.scaleBand()
      .padding(0.05);

    const y = d3.scaleLinear()
      .rangeRound([height, 0])

    const z = d3.scaleOrdinal()
      .range(["steelblue", "#ff8c00", "#a05d56", "#d0743c", "#ff8c00"])

    const parsed = d3.csvParse(rawCsv)

    const keys = parsed.columns.slice(1)

    x0.domain(parsed.map(d => d.State))

    x1.domain(keys).rangeRound([0, x0.bandwidth()])
    y.domain([0, d3.max(parsed, d => {
      return d3.max(keys, key => +d[key])
    })])


    svg.append('g')
      .selectAll('g')
      .data(parsed)
      .enter().append('g')
      .attr("transform", d => `translate(${x0(d.State)},0)`)
      .selectAll('rect')
      .data(d => {
        return keys.map(key => {
          return { key: key, value: d[key] }
        });
      })
      .enter().append('rect')
      .attr('x', d => x1(d.key))
      .attr('y', d => y(d.value))
      .attr('width', x1.bandwidth())
      .attr('height', d => height - y(d.value))
      .attr('fill', d => z(d.key))

    svg.append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x0))

    svg.append('g')
      .attr('class', 'axis')
      .call(d3.axisLeft(y).ticks(null, 's'))
      .append('text')
      .attr('x', 2)
      .attr('y', y(y.ticks().pop()) + 0.5)
      .attr('dy', '0.32em')
      .attr('fill', '#000')
      .attr('font-weight', 'bold')
      .attr('text-anchor', 'start')
      .text('Maternal Mortality Rate')


    const legend = svg.append('g')
      .attr('font-family', 'sans-serif')
      .attr('font-size', 10)
      .attr('text-anchor', 'end')
      .selectAll('g')
      .data(keys.slice().reverse())
      .enter().append('g')
      .attr('transform', (d, i) => `translate(0, ${i * 20})`)

    legend.append('rect')
      .attr('x', width - 500)
      .attr('width', 19)
      .attr('height', 19)
      .attr('fill', z)

    legend.append('text')
      .attr('x', width - 524)
      .attr('y', 9.5)
      .attr('dy', '0.32em')
      .text(d => d)
  }


  return (
    <div>
      <h1>Statewise Maternal Mortality Rate (India)</h1>
      {/* <div ref="myCanvas"> */}
      <div ref={canvasRef}>
      </div>
    </div>
  );
}

export default Mort