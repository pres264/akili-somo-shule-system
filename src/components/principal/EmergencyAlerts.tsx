
import { BellIcon } from "lucide-react";

const alerts = [
  {
    id: 1,
    message: "3 students missing immunization records",
    priority: "high",
  },
  {
    id: 2,
    message: "Term fee payment deadline approaching",
    priority: "medium",
  },
  {
    id: 3,
    message: "NEMIS sync failed for Grade 4 students",
    priority: "low",
  },
];

export const EmergencyAlerts = () => {
  return (
    <div className="space-y-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`flex items-center gap-3 rounded-lg border p-4 ${
            alert.priority === "high"
              ? "border-red-200 bg-red-50"
              : alert.priority === "medium"
              ? "border-yellow-200 bg-yellow-50"
              : "border-blue-200 bg-blue-50"
          }`}
        >
          <BellIcon className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm">{alert.message}</p>
        </div>
      ))}
    </div>
  );
};
