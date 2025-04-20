
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ListChecks, ClipboardCheck, MessageSquare } from "lucide-react";
import { StatsCard } from "../principal/StatsCard";
import { SubjectPerformance } from "./SubjectPerformance";
import { UpcomingLessons } from "./UpcomingLessons";

export const TeacherDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Teacher Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          icon={BookOpen}
          title="Classes Today"
          value="5"
          description="Upcoming lessons"
        />
        <StatsCard 
          icon={ListChecks}
          title="Attendance"
          value="92%"
          description="Average class attendance"
        />
        <StatsCard 
          icon={ClipboardCheck}
          title="Assignments"
          value="8"
          description="Pending to grade"
        />
        <StatsCard 
          icon={MessageSquare}
          title="Messages"
          value="3"
          description="Unread parent messages"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <SubjectPerformance />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Lessons</CardTitle>
          </CardHeader>
          <CardContent>
            <UpcomingLessons />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
