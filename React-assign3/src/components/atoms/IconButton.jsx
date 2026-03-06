import React from 'react';

export default function IconButton({ icon, label, active = false, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-20 h-full transition-all border-b-2 ${active ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}
    >
      <span className="text-xl">{icon}</span>
      <span className="text-[10px] font-medium mt-1">{label}</span>
    </button>
  );
}