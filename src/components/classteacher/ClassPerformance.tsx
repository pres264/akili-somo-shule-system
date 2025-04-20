
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { subject: "Mathematics", average: 75 },
  { subject: "English", average: 82 },
  { subject: "Physics", average: 68 },
  { subject: "Chemistry", average: 71 },
  { subject: "Biology", average: 79 },
];

export const ClassPerformance = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="average" fill="#9b87f5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
