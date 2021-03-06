import React from 'react';
import Show from '../components/show';
import Patterns from '../components/tiles/patterns';

export default () => {
  return (
    <Show component={Patterns} title="Patterns" margin={{
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
    }}>
{`import React from 'react';
import Pattern from '@vx/pattern';
import Shape from '@vx/shape';

const blocklist = ["Pattern", "Path", "Orientation"];
const PATTERNS = Object.keys(Pattern)
  .filter((p) => !blocklist.includes(p));

export default ({
  width,
  height,
}) => {
  const xMax = width;
  const yMax = height - 80;
  const pWidth = xMax / 4;
  const pHeight = yMax / 2;
  if (width < 10) return null;
  return (
    <svg width={width} height={height}>
      <Pattern.Lines
        id='vLines'
        height={6}
        width={6}
        stroke='black'
        strokeWidth={1}
      />
      <Pattern.Lines
        id='hLines'
        height={6}
        width={6}
        stroke='black'
        strokeWidth={1}
        orientation={['horizontal']}
      />
      <Pattern.Lines
        id='dLines'
        height={6}
        width={6}
        stroke='black'
        strokeWidth={1}
        orientation={['diagonal']}
      />
      <Pattern.Lines
        id='dhLines'
        height={6}
        width={6}
        stroke='black'
        strokeWidth={1}
        orientation={['vertical', 'horizontal']}
      />
      <Pattern.Circles
        id='Circles'
        height={6}
        width={6}
        fill="black"
      />
      <Pattern.Circles
        id='cCircles'
        height={10}
        width={10}
        fill="black"
        complement
      />
      <Pattern.Waves
        id='Waves'
        height={6}
        width={6}
        fill="transparent"
        stroke="black"
        strokeWidth={1}
        complement
      />
      <Pattern.Waves
        id='bWaves'
        height={12}
        width={12}
        fill="transparent"
        stroke="black"
        strokeWidth={1}
        complement
      />
      <Shape.Bar
        fill={\`url(#vLines)\`}
        height={pHeight}
        width={pWidth}
        x={0}
        y={0}
        rx={14}
      />
      <Shape.Bar
        fill={\`url(#hLines)\`}
        height={pHeight}
        width={pWidth}
        x={pWidth}
        y={0}
        rx={14}
      />
      <Shape.Bar
        fill={\`url(#dLines)\`}
        height={pHeight}
        width={pWidth}
        x={pWidth * 2}
        y={0}
        rx={14}
      />
      <Shape.Bar
        fill={\`url(#dhLines)\`}
        height={pHeight}
        width={pWidth}
        x={pWidth * 3}
        y={0}
        rx={14}
      />
      <Shape.Bar
        fill={\`url(#Circles)\`}
        height={pHeight}
        width={pWidth}
        x={0}
        y={pHeight}
        rx={14}
      />
      <Shape.Bar
        fill={\`url(#cCircles)\`}
        height={pHeight}
        width={pWidth}
        x={pWidth}
        y={pHeight}
        rx={14}
      />
      <Shape.Bar
        fill={\`url(#Waves)\`}
        height={pHeight}
        width={pWidth}
        x={pWidth * 2}
        y={pHeight}
        rx={14}
      />
      <Shape.Bar
        fill={\`url(#bWaves)\`}
        height={pHeight}
        width={pWidth}
        x={pWidth * 3}
        y={pHeight}
        rx={14}
      />
    </svg>
  );
}`}
    </Show>
  );
}
