import React from 'react';

/**
 * StatCard Component
 * @param {string} title - The label for the metric (e.g., "Class Average")
 * @param {string|number} value - The actual data point (e.g., "88.5%")
 * @param {string} color - Tailwind background class for the icon accent (e.g., "bg-emerald-500")
 */
const StatCard = ({ title, value, color }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-5 hover:shadow-md transition-shadow duration-300">
      {/* Decorative Icon Circle */}
      <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white shadow-lg shadow-current/20`}>
        <span className="text-xl">📊</span>
      </div>

      {/* Content Section */}
      <div>
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">
          {title}
        </p>
        <h3 className="text-2xl font-black text-slate-800 mt-1">
          {value}
        </h3>
      </div>
    </div>
  );
};

export default StatCard;