import React from 'react';
import Avatar from '../atoms/Avatar';
import UserStat from '../molecules/UserStat';

export default function Sidebar() {
  return (
    <aside className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      <div className="h-16 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      <div className="px-4 pb-4 -mt-10 flex flex-col items-center border-b border-gray-100">
        <Avatar size="lg" border={true} />
        <h3 className="mt-3 font-bold text-gray-900">Sarika N</h3>
        <p className="text-xs text-gray-500 text-center px-4">Computer Science Student | Java Full Stack Developer</p>
      </div>
      <div className="p-4">
        <UserStat label="Profile viewers" value="142" />
        <UserStat label="Post impressions" value="1,054" />
      </div>
    </aside>
  );
}