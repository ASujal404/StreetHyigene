import React from "react";

const suppliers = [
  { name: "FreshFarm Pvt Ltd", item: "Tomatoes", rate: "₹20/kg", contact: "9876543210" },
  { name: "AgriBazaar", item: "Onions", rate: "₹15/kg", contact: "9123456789" },
];

const SupplierList = () => {
  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">📦 Supplier List</h2>
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <table className="min-w-full text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="py-3 px-6">Supplier</th>
              <th className="py-3 px-6">Item</th>
              <th className="py-3 px-6">Rate</th>
              <th className="py-3 px-6">Contact</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {suppliers.map((supplier, i) => (
              <tr key={i} className="border-b hover:bg-gray-50 transition-all">
                <td className="py-3 px-6">{supplier.name}</td>
                <td className="py-3 px-6">{supplier.item}</td>
                <td className="py-3 px-6">{supplier.rate}</td>
                <td className="py-3 px-6">{supplier.contact}</td>
                <td className="py-3 px-6">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 text-sm">
                    Request Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierList;
