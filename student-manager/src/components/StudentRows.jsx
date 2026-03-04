import GradeBadge from "./GradeBagde";

const StudentRows = ({ student }) => {
  // Logic: Calculate Average
  const { java, dbms, react } = student.marks;
  const avg = ((java + dbms + react) / 3).toFixed(2);

  return (
    <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition">
      <td className="p-4">
        <div className="font-bold text-slate-700">{student.name}</div>
        <div className="text-[10px] text-slate-400 uppercase">ID: {student.id}</div>
      </td>
      <td className="p-4 text-sm text-slate-600">{java}</td>
      <td className="p-4 text-sm text-slate-600">{dbms}</td>
      <td className="p-4 text-sm text-slate-600">{react}</td>
      <td className="p-4 font-mono font-bold text-emerald-600">{avg}%</td>
      <td className="p-4">
        <GradeBadge score={avg} />
      </td>
    </tr>
  );
};

export default StudentRows;