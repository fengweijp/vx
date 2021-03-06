import React from 'react';
import Mock from '@vx/mock-data';
import Scale from '@vx/scale';
import Shape from '@vx/shape';
import Curve from '@vx/curve';
import Gradient from '@vx/gradient'
import { extent, max } from 'd3-array';
import { stack as d3stack } from 'd3-shape';
import { timeParse } from 'd3-time-format';

const data = Mock.browserUsage;
const keys = Object.keys(data[0]).filter(k => k !== 'date');
const browserNames = [...keys].reverse();
const parseDate = timeParse("%Y %b %d");
const x = d => parseDate(d.date);
const stack = d3stack().keys(keys);

export default ({
  width,
  height,
  margin,
}) => {
  const yMax = height - margin.top - margin.bottom;
  const xMax = width - margin.left - margin.right;

  const xScale = Scale.scaleTime({
    range: [0, xMax],
    domain: extent(data, x),
  });
  const yScale = Scale.scaleLinear({
    range: [yMax, 0],
  });

  return (
    <svg width={width} height={height}>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="#f38181"
        rx={14}
      />
      <Gradient.OrangeRed id="OrangeRed" />
      <Shape.AreaStack
        reverse
        top={margin.top}
        left={margin.left}
        keys={keys}
        data={data}
        x={(d) => xScale(x(d.data))}
        y0={(d) => yScale(d[0] / 100)}
        y1={(d) => yScale(d[1] / 100)}
        strokeWidth={0}
        fill='url(#OrangeRed)'
        fillOpacity='1'
      />
    </svg>
  );
}
