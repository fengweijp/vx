import React from 'react';
import Show from '../components/show';
import Bars from '../components/tiles/bars';

export default () => {
  return (
    <Show component={Bars} title="Bars">
{`import React from 'react';
import Mock from '@vx/mock-data';
import Group from '@vx/group';
import Shape from '@vx/shape';
import Scale from '@vx/scale';
import Gradient from '@vx/gradient';
import { extent, max } from 'd3-array';

const data = Mock.letterFrequency.slice(5);

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// accessors
const x = d => d.letter;
const y = d => +d.frequency * 100;

export default ({
  width,
  height,
}) => {
  if (width < 10) return null;

  // bounds
  const xMax = width;
  const yMax = height - 120;

  // scales
  const xScale = Scale.scaleBand({
    rangeRound: [0, xMax],
    domain: data.map(x),
    padding: 0.4,
  });
  const yScale = Scale.scaleLinear({
    rangeRound: [yMax, 0],
    domain: [0, max(data, y)],
  });

  return (
    <svg width={width} height={height}>
      <Gradient.TealBlue id="teal" />
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill={\`url(#teal)\`}
        rx={14}
      />
      <Group top={40}>
        {data.map((d, i) => {
          const barHeight = yMax - yScale(y(d));
          return (
            <Group key={\`bar-\${x(d)}\`}>
              <Shape.Bar
                width={xScale.bandwidth()}
                height={barHeight}
                x={xScale(x(d))}
                y={yMax - barHeight}
                fill=\`rgba(23, 233, 217, .5)\`
              />
            </Group>
          );
        })}
      </Group>
    </svg>
  );
}`}
    </Show>
  );
}
