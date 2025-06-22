
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { AIAssistant } from "@/components/ai/AIAssistant";
import { AIAgentManager } from "@/components/ai/AIAgentManager";
import { AIAgentSetup } from "@/components/ai/AIAgentSetup";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bot, Brain, Database, Layers, Zap, Settings } from "lucide-react";

const AIFeatures = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">AI-Powered School Management</h1>
        
        <Tabs defaultValue="agents" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="agents">AI Agents</TabsTrigger>
            <TabsTrigger value="setup">Agent Setup</TabsTrigger>
            <TabsTrigger value="assistant">AI Assistant</TabsTrigger>
            <TabsTrigger value="features">AI Features</TabsTrigger>
          </TabsList>
          
          <TabsContent value="agents" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  AI Agent Management
                </CardTitle>
                <CardDescription>
                  Manage and monitor your automated AI agents for school management tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AIAgentManager />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="setup" className="mt-6">
            <AIAgentSetup />
          </TabsContent>
          
          <TabsContent value="assistant" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold mb-4">AI Assistant</h2>
                <p className="text-muted-foreground mb-6">
                  Chat with our AI assistant to get help with school management tasks, 
                  ask questions, and get recommendations.
                </p>
              </div>
              <AIAssistant />
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="mt-6">
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
                    <Zap className="h-5 w-5 text-green-600" />
                    <CardTitle>Automated Communications</CardTitle>
                  </div>
                  <CardDescription>AI agents handle routine communications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Set up AI agents to automatically send attendance updates, fee reminders,
                  and performance reports to parents via SMS and USSD.</p>
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
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AIFeatures;
