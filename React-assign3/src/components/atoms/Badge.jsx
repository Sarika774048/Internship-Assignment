import React from 'react';

export default function Badge({ text, color = "blue" }) {
  const colors = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    gray: "bg-gray-100 text-gray-600"
  };
  return (
    <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${colors[color]}`}>
      {text}
    </span>
  );
}