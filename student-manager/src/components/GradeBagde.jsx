const GradeBadge = ({ score }) => {
  let style = "bg-emerald-100 text-emerald-700";
  let label = "DISTINCTION";

  if (score < 60) {
    style = "bg-red-100 text-red-700";
    label = "FAIL";
  } else if (score < 80) {
    style = "bg-amber-100 text-amber-700";
    label = "AVERAGE";
  }

  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-tighter ${style}`}>
      {label}
    </span>
  );
};

export default GradeBadge;