import React from 'react';

export default function UserStat({ label, value }) {
  return (
    <div className="flex justify-between items-center py-2 hover:bg-gray-50 cursor-pointer px-4 -mx-4 transition-colors">
      <span className="text-xs font-bold text-gray-500">{label}</span>
      <span className="text-xs font-bold text-blue-600">{value}</span>
    </div>
  );
}