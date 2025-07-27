import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#232f3e] text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">StreetSupply</h1>
        <ul className="flex gap-6 font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Vendors</li>
          <li className="hover:text-yellow-400 cursor-pointer">Suppliers</li>
          <li className="hover:text-yellow-400 cursor-pointer">Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
