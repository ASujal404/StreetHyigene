import React, { useState } from "react";

const sampleOrders = [
  { id: 1, vendor: "Sujal Snacks", details: "5kg Potatoes, 2L Oil", status: "Pending" },
  { id: 2, vendor: "Anushka Chaat", details: "10kg Onions, 3L Oil", status: "Pending" },
];

const SupplierPortal = () => {
  const [orders, setOrders] = useState(sampleOrders);

  const updateStatus = (id, newStatus) => {
    const updated = orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Supplier Portal</h2>
      <div className="grid gap-4">
        {orders.map(order => (
          <div key={order.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <p className="font-semibold">Vendor: {order.vendor}</p>
              <p>Order: {order.details}</p>
              <p>Status: 
                <span className={`ml-2 font-bold ${
                  order.status === "Accepted" ? "text-green-600" :
                  order.status === "Rejected" ? "text-red-600" :
                  "text-yellow-600"
                }`}>
                  {order.status}
                </span>
              </p>
            </div>
            {order.status === "Pending" && (
              <div className="space-x-2">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded"
                  onClick={() => updateStatus(order.id, "Accepted")}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => updateStatus(order.id, "Rejected")}
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplierPortal;
