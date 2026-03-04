
import StatCard from "../components/StatCard";

const Dashboard = ({ students }) => {
  // Logic: High Order Functions to calculate global stats
  const totalStudents = students.length;
  const classAvg = (students.reduce((acc, curr) => {
    const sAvg = (curr.marks.java + curr.marks.dbms + curr.marks.react) / 3;
    return acc + sAvg;
  }, 0) / (totalStudents || 1)).toFixed(2);

  return (
    <div className="p-8 ml-64">
      <h1 className="text-3xl font-black text-slate-900 mb-8">Performance_Overview</h1>
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Enrolled" value={totalStudents} color="bg-sky-500" />
        <StatCard title="Class Average" value={`${classAvg}%`} color="bg-emerald-500" />
        <StatCard title="Exam Status" value="Live" color="bg-amber-500" />
      </div>
    </div>
  );
};

export default Dashboard;