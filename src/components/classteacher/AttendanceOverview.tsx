
import { Card } from "@/components/ui/card";

const attendanceData = [
  { student: "John Doe", status: "Present", time: "7:45 AM" },
  { student: "Jane Smith", status: "Late", time: "8:15 AM" },
  { student: "Mike Johnson", status: "Absent", time: "-" },
];

export const AttendanceOverview = () => {
  return (
    <div className="space-y-4">
      {attendanceData.map((record, index) => (
        <Card key={index} className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">{record.student}</p>
              <p className={`text-sm ${
                record.status === 'Present' ? 'text-green-600' :
                record.status === 'Late' ? 'text-yellow-600' :
                'text-red-600'
              }`}>
                {record.status}
              </p>
            </div>
            <div className="text-gray-500">{record.time}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};
