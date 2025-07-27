import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Week 1", orders: 30 },
  { name: "Week 2", orders: 45 },
  { name: "Week 3", orders: 35 },
  { name: "Week 4", orders: 50 },
];

const Analytics = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Analytics</h2>
      <div className="bg-white p-4 rounded shadow h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;