// src/components/VendorDashboard.jsx
import React from "react";

const VendorDashboard = () => {
  const cards = [
    { title: "Suppliers", value: 12 },
    { title: "Orders Placed", value: 38 },
    { title: "Pending Deliveries", value: 5 },
    { title: "Total Spend", value: "₹15,500" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Vendor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition"
          >
            <p className="text-gray-500 text-sm">{card.title}</p>
            <h2 className="text-2xl font-semibold mt-2">{card.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorDashboard;
