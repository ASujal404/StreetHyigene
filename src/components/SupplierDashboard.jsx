import React from "react";

const SupplierDashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Supplier Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-100 p-4 rounded shadow">
          <h3 className="font-semibold">Orders Received</h3>
          <p className="text-2xl font-bold">25</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h3 className="font-semibold">Stock Available</h3>
          <p className="text-2xl font-bold">1,200 Kg</p>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow">
          <h3 className="font-semibold">Total Revenue</h3>
          <p className="text-2xl font-bold">₹58,000</p>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;
