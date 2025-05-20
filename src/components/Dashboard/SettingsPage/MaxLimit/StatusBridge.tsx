const StatusBadge = ({ status = "In Active" }) => (
  <div className="absolute top-10 right-[20px] rotate-[-45deg] text-sm text-white/70 whitespace-nowrap">
    {status}
  </div>
);

export default function StatusGrid({ statusType = "In Active" }) {
  const statusList = Array(10).fill(statusType); // 10 times

  return (
    <div className="flex flex-row overflow-auto gap-4 mt-6">
      {statusList.map((status, index) => (
        <div
          key={index}
          className="relative w-full h-28  flex items-center justify-center"
        >
          <StatusBadge status={status} />
        </div>
      ))}
    </div>
  );
}

