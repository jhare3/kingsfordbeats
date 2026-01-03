// src/components/PromoBanner.jsx
import React from 'react';
import { Tag, Search } from 'lucide-react'; // Optional: if you use lucide-icons

const PromoBanner = () => {
  return (
    <section className="bg-black text-white py-4 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Bulk Deals Section */}
        <div className="flex items-center gap-3">
          <div className="bg-red-600 p-2 rounded-full">
            <Tag size={16} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-tighter">Limited Time Offer</p>
            <p className="text-sm font-medium text-gray-300">
              Buy 2, Get <span className="text-red-500 font-bold">10 FREE</span> — 10% OFF USE CODE: <span className="text-red-500 font-bold">KING10</span>
            </p>
          </div>
        </div>

        {/* Search Tip Section */}
        <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
          <Search size={18} className="text-gray-400" />
          <p className="text-sm italic">
            Looking for something specific? Use the <span className="font-bold underline">search bar</span> below.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PromoBanner;