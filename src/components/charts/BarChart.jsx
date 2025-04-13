import React from 'react';

const BarChart = ({ data = [5, 10, 8, 15, 12, 18, 10] }) => {
  const width = 200;
  const height = 100;
  const barWidth = width / data.length;
  const maxValue = Math.max(...data);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      {data.map((val, i) => {
        const barHeight = (val / maxValue) * height;
        const x = i * barWidth;
        const y = height - barHeight;

        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={barWidth - 4}
            height={barHeight}
            fill="#60A5FA" // Tailwind blue-400
            rx={2}
          />
        );
      })}
    </svg>
  );
};

export default BarChart;
