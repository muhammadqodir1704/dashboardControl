import React from 'react';

const SparkLine = ({ data = [5, 10, 8, 15, 12, 18, 10] }) => {
  const width = 200;
  const height = 50;
  const maxValue = Math.max(...data);

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - (val / maxValue) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <polyline
        fill="none"
        stroke="#4ADE80"
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
};

export default SparkLine;
