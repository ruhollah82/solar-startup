import { MapPin, Calendar, Zap } from "lucide-react";

interface InfoItemProps {
  icon: "location" | "date" | "capacity";
  value: string;
  className?: string;
}

const InfoItem = ({ icon, value, className = "" }: InfoItemProps) => {
  const iconMap = {
    location: MapPin,
    date: Calendar,
    capacity: Zap,
  };

  const colorMap = {
    location: "text-orange-500",
    date: "text-blue-500",
    capacity: "text-amber-500",
  };

  const Icon = iconMap[icon];

  return (
    <div className={`flex items-center text-gray-700 ${className}`}>
      <Icon className={`w-4 h-4 ${colorMap[icon]} mr-2 flex-shrink-0`} />
      <span className="text-xs sm:text-sm truncate">{value}</span>
    </div>
  );
};

export default InfoItem;
