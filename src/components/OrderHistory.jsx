import React from "react";

const OrderHistory = () => {
  const orders = [
    { id: 1, item: "Tomatoes", quantity: 20, date: "2025-07-23", status: "Delivered" },
    { id: 2, item: "Potatoes", quantity: 15, date: "2025-07-22", status: "Pending" },
    { id: 3, item: "Onions", quantity: 10, date: "2025-07-20", status: "Delivered" },
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Order History</h2>
      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Item</th>
            <th className="p-2 text-left">Quantity</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{order.item}</td>
              <td className="p-2">{order.quantity}</td>
              <td className="p-2">{order.date}</td>
              <td className="p-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;