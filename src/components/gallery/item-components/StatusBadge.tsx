interface StatusBadgeProps {
  status?: string;
  className?: string;
}

const StatusBadge = ({ status = "completed", className = "" }: StatusBadgeProps) => {
  const statusColors: Record<string, string> = {
    completed: "bg-green-500",
    ongoing: "bg-orange-500",
    planned: "bg-blue-500",
  };

  return (
    <div className={`absolute top-3 left-3 ${className}`}>
      <div
        className={`px-3 py-1 rounded-full text-white text-xs font-medium ${
          statusColors[status?.toLowerCase() || "completed"]
        }`}
      >
        {status || "Completed"}
      </div>
    </div>
  );
};

export default StatusBadge;
