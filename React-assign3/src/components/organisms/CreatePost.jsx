import React from 'react';
import Avatar from '../atoms/Avatar';

export default function CreatePost() {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4">
      <div className="flex gap-3 mb-4">
        <Avatar size="md" />
        <button className="flex-1 text-left px-4 border border-gray-300 rounded-full text-gray-400 font-medium text-sm hover:bg-gray-50 transition-all">
          Start a post...
        </button>
      </div>
      <div className="flex justify-between px-2">
        <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:bg-gray-100 p-2 rounded-lg transition-all">
          <span className="text-blue-400 text-lg">🖼️</span> Media
        </button>
        <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:bg-gray-100 p-2 rounded-lg transition-all">
          <span className="text-orange-400 text-lg">📅</span> Event
        </button>
        <button className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:bg-gray-100 p-2 rounded-lg transition-all">
          <span className="text-indigo-400 text-lg">✍️</span> Write article
        </button>
      </div>
    </div>
  );
}