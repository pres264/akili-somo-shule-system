
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
  { subject: "Mathematics", score: 78 },
  { subject: "English", score: 82 },
  { subject: "Science", score: 75 },
  { subject: "Social Studies", score: 85 },
];

export const PerformanceChart = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#9b87f5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
