import React, { useState } from "react";

const PlaceOrder = () => {
  const [formData, setFormData] = useState({
    supplier: "",
    item: "",
    quantity: "",
    deliveryDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Order Placed Successfully!");
    console.log(formData);
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">📝 Place New Order</h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Supplier Name</label>
            <input
              type="text"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              placeholder="Eg. FreshFarm Pvt Ltd"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Item</label>
            <input
              type="text"
              name="item"
              value={formData.item}
              onChange={handleChange}
              placeholder="Eg. Tomatoes"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Quantity (kg)</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Eg. 100"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">Delivery Date</label>
            <input
              type="date"
              name="deliveryDate"
              value={formData.deliveryDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-200"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PlaceOrder;
