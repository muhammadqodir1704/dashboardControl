import React from 'react';
import SparkLine from './charts/SparkLine';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* SparkLine Block */}
        <div className="bg-gray-800 rounded-2xl p-4 shadow-md">
          <h4 className="text-sm text-gray-300 mb-2">Spark Line</h4>
          <div className="h-24">
            <SparkLine data={[3, 6, 9, 4, 7, 5, 10]} />
          </div>
        </div>

        {/* BarChart Block */}
        <div className="bg-gray-800 rounded-2xl p-4 shadow-md">
          <h4 className="text-sm text-gray-300 mb-2">Bar Chart</h4>
          <div className="h-28">
            <BarChart data={[4, 6, 10, 7, 5, 12]} />
          </div>
        </div>

        {/* LineChart Block */}
        <div className="bg-gray-800 rounded-2xl p-4 shadow-md">
          <h4 className="text-sm text-gray-300 mb-2">Line Chart</h4>
          <div className="h-28">
            <LineChart data={[3, 5, 8, 12, 6, 7]} />
          </div>
        </div>

        {/* PieChart Block */}
        <div className="bg-gray-800 rounded-2xl p-4 shadow-md">
          <h4 className="text-sm text-gray-300 mb-2">Pie Chart</h4>
          <div className="h-32">
            <PieChart data={[20, 30, 50]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
