
import { Card } from "@/components/ui/card";

const lessons = [
  { time: "8:00 AM", subject: "Mathematics", class: "Form 2W" },
  { time: "10:00 AM", subject: "Physics", class: "Form 3E" },
  { time: "11:30 AM", subject: "Chemistry", class: "Form 4N" },
];

export const UpcomingLessons = () => {
  return (
    <div className="space-y-4">
      {lessons.map((lesson, index) => (
        <Card key={index} className="p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-lg">{lesson.subject}</p>
              <p className="text-sm text-gray-500">{lesson.class}</p>
            </div>
            <div className="text-purple-600 font-medium">{lesson.time}</div>
          </div>
        </Card>
      ))}
    </div>
  );
};
