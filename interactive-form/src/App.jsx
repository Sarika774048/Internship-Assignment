import React, { useState } from 'react';

export default function App() {
  // Navigation State
  const [view, setView] = useState('DASHBOARD');
  
  // Form & List State
  const [formData, setFormData] = useState({ name: '', department: 'Engineering' });
  const [userList, setUserList] = useState([
    { id: 1, name: 'Sarika N', dept: 'Development', date: '2026-03-04' }
  ]);
  const [loading, setLoading] = useState(false);

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!formData.name) return;

    setLoading(true);
    // Simulate a brief delay for a professional feel
    setTimeout(() => {
      const newUser = {
        id: Date.now(),
        name: formData.name,
        dept: formData.department,
        date: new Date().toLocaleDateString()
      };
      setUserList([newUser, ...userList]);
      setFormData({ name: '', department: 'Engineering' });
      setLoading(false);
    }, 500);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold text-blue-600 tracking-tight">Interactive Form</h1>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button 
            onClick={() => setView('DASHBOARD')}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${view === 'DASHBOARD' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setView('FORM')}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${view === 'FORM' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            Registration Form
          </button>
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="ml-64 flex-1 p-10">
        
        {/* VIEW: DASHBOARD */}
        {view === 'DASHBOARD' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 font-medium">Total Records</p>
                <p className="text-3xl font-bold text-gray-900">{userList.length}</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 font-medium">Active Session</p>
                <p className="text-3xl font-bold text-green-600">Live</p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: FORM & LIST */}
        {view === 'FORM' && (
          <div className="max-w-4xl mx-auto space-y-10">
            {/* THE FORM */}
            <section className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
              <h2 className="text-xl font-bold mb-6">User Registration</h2>
              <form onSubmit={handleAddUser} className="grid grid-cols-3 gap-4 items-end">
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.department}
                    onChange={(e) => setFormData({...formData, department: e.target.value})}
                  >
                    <option>Engineering</option>
                    <option>Design</option>
                    <option>Marketing</option>
                  </select>
                </div>
                <button 
                  disabled={loading}
                  className={`px-6 py-2 rounded-lg font-bold text-white transition-all ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  {loading ? 'Adding...' : 'Add Record'}
                </button>
              </form>
            </section>

            {/* THE LIST */}
            <section className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
                <h3 className="font-bold text-gray-700">Recent Entries</h3>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-sm text-gray-500 border-b border-gray-100">
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Department</th>
                    <th className="px-6 py-4 font-semibold">Date Added</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {userList.map(user => (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{user.dept}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{user.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}