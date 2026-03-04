import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  // Navigation configuration for easy maintenance
  const navItems = [
    { name: 'Analytics', path: '/', icon: '📊' },
    { name: 'Student Registry', path: '/manager', icon: '🎓' },
  ];

  return (
    <aside className="w-64 bg-slate-900 h-screen fixed left-0 top-0 p-6 flex flex-col border-r border-slate-800 shadow-2xl z-50">
      {/* Branding Section */}
      <div className="mb-12 px-2">
        <h1 className="text-emerald-400 font-black text-2xl tracking-tighter">
          LUMINA<span className="text-white">_EDU</span>
        </h1>
        <p className="text-[10px] text-slate-500 font-bold tracking-widest mt-1">
          ACADEMIC ERP v1.0
        </p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                isActive 
                  ? 'bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* Footer Info / User Session */}
      <div className="mt-auto pt-6 border-t border-slate-800">
        <div className="flex items-center gap-3 p-2">
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 text-xs font-bold">
            SN
          </div>
          <div>
            <p className="text-xs font-bold text-slate-200">Sarika N</p>
            <p className="text-[10px] text-slate-500 uppercase">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;