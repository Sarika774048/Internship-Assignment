import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  // Navigation items array for high-volume mapping
  const navLinks = [
    { path: '/home', label: 'Home', icon: '🏠' },
    { path: '/jobs', label: 'Jobs', icon: '💼' },
    { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 h-16 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-full flex justify-between items-center">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <Link to="/home" className="bg-blue-600 text-white w-9 h-9 rounded-md font-black flex items-center justify-center text-2xl hover:bg-blue-700 transition-colors">
            in
          </Link>
          <div className="relative hidden md:block">
            <span className="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</span>
            <input 
              placeholder="Search talent or jobs..." 
              className="bg-[#edf3f8] pl-10 pr-4 py-2 rounded-md text-sm w-64 outline-none border border-transparent focus:border-gray-300 transition-all font-medium" 
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex h-full items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                flex flex-col items-center justify-center w-20 h-full transition-all border-b-2 
                ${isActive 
                  ? 'border-gray-900 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:text-gray-900'
                }
              `}
            >
              <span className="text-xl mb-0.5">{link.icon}</span>
              <span className="text-[10px] font-bold uppercase tracking-tighter">{link.label}</span>
            </NavLink>
          ))}
          
          {/* User Utility Atom */}
          <div className="ml-6 pl-6 border-l border-gray-100 flex items-center gap-3 cursor-pointer group">
            <div className="text-right hidden sm:block">
              <p className="text-[10px] font-black text-gray-400 uppercase leading-none">Account</p>
              <p className="text-xs font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Sarika N</p>
            </div>
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarika" 
              className="w-9 h-9 rounded-full bg-blue-50 border border-gray-200" 
              alt="Me" 
            />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;