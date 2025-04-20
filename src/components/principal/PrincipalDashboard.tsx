
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartBarIcon, UsersIcon, CalendarIcon, BellIcon } from "lucide-react";
import { StatsCard } from "./StatsCard";
import { PerformanceChart } from "./PerformanceChart";
import { EmergencyAlerts } from "./EmergencyAlerts";

export const PrincipalDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Principal Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          icon={ChartBarIcon}
          title="CBC Performance"
          value="78%"
          description="Average competency score"
        />
        <StatsCard 
          icon={UsersIcon}
          title="Fee Defaulters"
          value="12"
          description="Students with pending fees"
        />
        <StatsCard 
          icon={CalendarIcon}
          title="NEMIS Sync"
          value="2h ago"
          description="Last system synchronization"
        />
        <StatsCard 
          icon={BellIcon}
          title="Alerts"
          value="3"
          description="Urgent matters requiring attention"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>CBC Performance Heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <PerformanceChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Emergency Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <EmergencyAlerts />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
