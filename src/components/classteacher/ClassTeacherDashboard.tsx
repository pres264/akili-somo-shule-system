
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ListChecks, Calendar, FileText } from "lucide-react";
import { StatsCard } from "../principal/StatsCard";
import { ClassPerformance } from "./ClassPerformance";
import { AttendanceOverview } from "./AttendanceOverview";

export const ClassTeacherDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Class Teacher Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          icon={Users}
          title="Class Size"
          value="42"
          description="Students in 4W"
        />
        <StatsCard 
          icon={ListChecks}
          title="Attendance"
          value="95%"
          description="Today's attendance"
        />
        <StatsCard 
          icon={Calendar}
          title="Events"
          value="2"
          description="Upcoming class events"
        />
        <StatsCard 
          icon={FileText}
          title="Reports"
          value="6"
          description="Pending term reports"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Class Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ClassPerformance />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <AttendanceOverview />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
