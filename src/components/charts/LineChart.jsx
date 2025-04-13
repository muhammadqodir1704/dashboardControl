import React from 'react';

const LineChart = ({ data = [5, 10, 8, 15, 12, 18, 10] }) => {
  const width = 300;
  const height = 100;
  const maxValue = Math.max(...data);
  
  // Har bir nuqtani hisoblash
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - (val / maxValue) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <polyline
        fill="none"
        stroke="#F59E0B" // Tailwind yellow-500
        strokeWidth="2"
        points={points}
      />
    </svg>
  );
};

export default LineChart;
