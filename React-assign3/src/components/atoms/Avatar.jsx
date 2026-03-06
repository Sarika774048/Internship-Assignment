import React from 'react';

export default function Avatar({ src, size = "md", border = false }) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-20 h-20",
    xl: "w-24 h-24"
  };
  return (
    <img 
      src={src || "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarika"} 
      className={`${sizes[size]} rounded-full object-cover ${border ? 'border-4 border-white' : 'border border-gray-200'}`}
      alt="User Profile"
    />
  );
}