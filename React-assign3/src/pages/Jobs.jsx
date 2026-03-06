import React from 'react';

const Jobs = () => {
  const jobs = [
    { title: "Frontend Developer", company: "Google", loc: "Bangalore", type: "Remote" },
    { title: "Java Backend Engineer", company: "TCS", loc: "Pune", type: "On-site" },
    { title: "React Specialist", company: "Startup Hub", loc: "Mumbai", type: "Hybrid" }
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-4 animate-in fade-in duration-500">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Recommended for you</h2>
      {jobs.map((job, i) => (
        <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-400 transition-colors cursor-pointer flex gap-4">
          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center font-black text-gray-400 text-xl">🏢</div>
          <div>
            <h4 className="font-bold text-blue-600 hover:underline">{job.title}</h4>
            <p className="text-sm text-gray-800">{job.company}</p>
            <p className="text-xs text-gray-500 mt-1">{job.loc} ({job.type})</p>
            <p className="text-[10px] text-green-600 font-bold mt-2">Actively recruiting</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;