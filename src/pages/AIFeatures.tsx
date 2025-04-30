
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Brain, Database, Layers } from "lucide-react";

const AIFeatures = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">AI-Powered School Management</h1>
        
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="col-span-full xl:col-span-2">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                    <CardTitle>Student Performance Predictions</CardTitle>
                  </div>
                  <CardDescription>AI-powered insights into student academic trajectory</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our AI analyzes historical performance data to predict future outcomes 
                  and identify students who may need additional support.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-blue-600" />
                    <CardTitle>Automated Data Processing</CardTitle>
                  </div>
                  <CardDescription>Turn paper records into digital data</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Upload scanned documents and our AI will automatically extract
                  and organize student information for efficient record keeping.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-green-600" />
                    <CardTitle>Parent Communication</CardTitle>
                  </div>
                  <CardDescription>AI-powered responses to common queries</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Our chatbot can handle routine parent inquiries about school policies,
                  schedules, and student information, freeing up staff time.</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-orange-600" />
                    <CardTitle>Smart Class Assignment</CardTitle>
                  </div>
                  <CardDescription>Optimize classroom composition</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>AI algorithms help create balanced classrooms considering academic abilities,
                  behavior patterns, and special needs requirements.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="col-span-full xl:col-span-1">
            <AIAssistant />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AIFeatures;
