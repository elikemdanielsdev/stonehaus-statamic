import React from "react";
import { Info, AlertTriangle, CheckCircle } from "lucide-react";

export default function AnnouncementSet({ kind = "info", content }) {
  const alertStyles = {
    info: "bg-blue-100 border-blue-400 text-blue-700",
    warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
    success: "bg-green-100 border-green-400 text-green-700",
  };

  const icons = {
    info: <Info className="w-5 h-5 text-blue-700" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-700" />,
    success: <CheckCircle className="w-5 h-5 text-green-700" />,
  };

  return (
    <div className={`flex items-center p-4 border-l-4 rounded ${alertStyles[kind]}`}>
      <div className="mr-3">{icons[kind]}</div>
      <span>{content}</span>
    </div>
  );
}
