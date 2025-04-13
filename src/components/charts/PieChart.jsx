import React from 'react';

const PieChart = ({ data = [20, 30, 50], size = 200 }) => {
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
      {data.map((value, index) => {
        const strokeDasharray = (value / 100) * circumference;
        const strokeDashoffset = offset;
        offset += strokeDasharray;

        return (
          <circle
            key={index}
            cx={radius}
            cy={radius}
            r={radius}
            fill="transparent"
            stroke="#3B82F6"
            strokeWidth={size / 4}
            strokeDasharray={`${strokeDasharray} ${circumference}`}
            strokeDashoffset={-strokeDashoffset}
            transform={`rotate(-90) translate(${size}, 0)`}
          />
        );
      })}
    </svg>
  );
};

export default PieChart;
