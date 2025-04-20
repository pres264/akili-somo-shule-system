
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
  { class: "Form 1", score: 82 },
  { class: "Form 2", score: 75 },
  { class: "Form 3", score: 88 },
  { class: "Form 4", score: 79 },
];

export const SubjectPerformance = () => {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="class" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="score" fill="#9b87f5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
