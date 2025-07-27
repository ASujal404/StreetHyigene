import React from "react";
import { ShieldCheck, PackageCheck, Sparkles, ThermometerSnowflake } from "lucide-react";

const Hygiene = () => {
  return (
    <section className="p-6 bg-green-50 rounded-xl shadow-sm">
      <h1 className="text-3xl font-bold text-green-800 mb-4">Hygiene Standards</h1>
      <p className="text-gray-700 mb-6">
        At <span className="font-semibold">HygieneHub</span>, we ensure every supplier follows essential hygiene protocols to maintain the highest level of food safety. Here's what we guarantee:
      </p>

      <ul className="space-y-4">
        <li className="flex items-start gap-3">
          <ShieldCheck className="text-green-600 mt-1" />
          <span>
            <strong>Regular Inspection:</strong> Raw materials are checked for quality and safety before delivery.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <PackageCheck className="text-green-600 mt-1" />
          <span>
            <strong>Safe Packaging:</strong> Every product is sealed, labeled, and transported under hygienic conditions.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Sparkles className="text-green-600 mt-1" />
          <span>
            <strong>Cleaning Procedures:</strong> All vendors follow verified sanitation and personal hygiene protocols.
          </span>
        </li>
        <li className="flex items-start gap-3">
          <ThermometerSnowflake className="text-green-600 mt-1" />
          <span>
            <strong>Temperature Control:</strong> Cold-chain logistics are maintained for perishable items.
          </span>
        </li>
      </ul>
    </section>
  );
};

export default Hygiene;
