import React, { useState } from 'react';

export default function PostAction({ icon, label }) {
  const [active, setActive] = useState(false);
  return (
    <button 
      onClick={() => setActive(!active)}
      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-gray-100 transition-colors ${active ? 'text-blue-600' : 'text-gray-500'}`}
    >
      <span className="text-lg">{icon}</span>
      <span className="text-xs font-bold">{label}</span>
    </button>
  );
}