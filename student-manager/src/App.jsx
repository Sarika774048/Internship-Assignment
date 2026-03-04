import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import StudentManager from './pages/StudentManager';

export default function App() {
  const [students] = useState([
    { id: 101, name: "Sarika N", marks: { java: 85, dbms: 90, react: 92 }, dept: "CSE" },
    { id: 102, name: "Rahul K", marks: { java: 70, dbms: 65, react: 75 }, dept: "ISE" }
  ]);

  return (
    <Router>
      <div className="flex bg-slate-50 min-h-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard students={students} />} />
          <Route path="/manager" element={<StudentManager />} />
        </Routes>
      </div>
    </Router>
  );
}