import React from 'react';

const Profile = () => (
  <div className="max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-700">
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-6">
      <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
      <div className="px-8 pb-8 -mt-16">
        <div className="w-32 h-32 bg-white p-1 rounded-full border-4 border-white shadow-md">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarika" className="rounded-full bg-blue-50" alt="Profile" />
        </div>
        <h1 className="text-2xl font-black text-gray-900 mt-4">Sarika N</h1>
        <p className="text-gray-500 font-medium italic">Computer Science Student | Java Full Stack Developer</p>
        <p className="text-xs text-gray-400 mt-1">Bangalore, India • 500+ Connections</p>
        <div className="flex gap-2 mt-4">
          <button className="bg-blue-600 text-white px-6 py-1.5 rounded-full font-bold text-sm">Open to</button>
          <button className="border border-blue-600 text-blue-600 px-6 py-1.5 rounded-full font-bold text-sm">Add section</button>
        </div>
      </div>
    </div>

    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="font-bold text-gray-900 mb-4">Experience</h3>
      <div className="border-l-2 border-gray-100 pl-6 relative">
        <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
        <p className="font-bold text-sm">Full Stack Development Intern</p>
        <p className="text-xs text-gray-500">Feb 2026 - Present</p>
        <p className="text-xs text-gray-700 mt-2 leading-relaxed">Developing modular React components and Java Spring Boot backends for professional-grade web applications.</p>
      </div>
    </div>
  </div>
);

export default Profile;