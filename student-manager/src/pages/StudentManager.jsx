import React,   { useState } from 'react';
import StudentRows from '../components/StudentRows';

const StudentManager = () => {
  const [students, setStudents] = useState([
    { id: 101, name: "Sarika N", marks: { java: 85, dbms: 90, react: 92 }, dept: "CSE" },
    { id: 102, name: "Rahul K", marks: { java: 70, dbms: 65, react: 75 }, dept: "ISE" }
  ]);

  const [form, setForm] = useState({ name: '', id: '', java: '', dbms: '', react: '' });

  const addStudent = (e) => {
    e.preventDefault();
    const newEntry = {
      id: parseInt(form.id),
      name: form.name,
      marks: { 
        java: parseInt(form.java), 
        dbms: parseInt(form.dbms), 
        react: parseInt(form.react) 
      },
      dept: "CSE"
    };
    setStudents([...students, newEntry]);
    setForm({ name: '', id: '', java: '', dbms: '', react: '' });
  };

  return (
    <div className="p-8 ml-64 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-black text-slate-800 mb-8">Registry_Manager</h1>
      
      {/* Input Form */}
      <form onSubmit={addStudent} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mb-10 grid grid-cols-5 gap-4">
        <input placeholder="Name" className="p-3 bg-slate-50 rounded-xl text-sm outline-none border border-transparent focus:border-emerald-500" 
          value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} required />
        <input placeholder="ID" type="number" className="p-3 bg-slate-50 rounded-xl text-sm outline-none border border-transparent focus:border-emerald-500" 
          value={form.id} onChange={(e) => setForm({...form, id: e.target.value})} required />
        <input placeholder="Java" type="number" className="p-3 bg-slate-50 rounded-xl text-sm outline-none border border-transparent focus:border-emerald-500" 
          value={form.java} onChange={(e) => setForm({...form, java: e.target.value})} required />
        <input placeholder="DBMS" type="number" className="p-3 bg-slate-50 rounded-xl text-sm outline-none border border-transparent focus:border-emerald-500" 
          value={form.dbms} onChange={(e) => setForm({...form, dbms: e.target.value})} required />
        <button className="bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition">ADD_STUDENT</button>
      </form>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 text-xs font-black text-slate-400 uppercase">Student</th>
              <th className="p-4 text-xs font-black text-slate-400 uppercase">Java</th>
              <th className="p-4 text-xs font-black text-slate-400 uppercase">DBMS</th>
              <th className="p-4 text-xs font-black text-slate-400 uppercase">React</th>
              <th className="p-4 text-xs font-black text-slate-400 uppercase">Average</th>
              <th className="p-4 text-xs font-black text-slate-400 uppercase">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => <StudentRows key={s.id} student={s} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentManager;