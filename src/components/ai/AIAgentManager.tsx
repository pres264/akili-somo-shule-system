
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Bot, Play, Pause, Settings, Activity, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from "sonner";

interface AIAgent {
  id: string;
  name: string;
  description: string;
  category: 'attendance' | 'communication' | 'performance' | 'administration';
  isActive: boolean;
  lastRun?: string;
  status: 'idle' | 'running' | 'completed' | 'error';
  successRate: number;
  automationLevel: 'basic' | 'advanced' | 'full';
}

const initialAgents: AIAgent[] = [
  {
    id: 'attendance-monitor',
    name: 'Attendance Monitor',
    description: 'Automatically tracks attendance patterns and sends alerts for absences',
    category: 'attendance',
    isActive: true,
    lastRun: '2 hours ago',
    status: 'completed',
    successRate: 95,
    automationLevel: 'advanced'
  },
  {
    id: 'parent-communicator',
    name: 'Parent Communication Bot',
    description: 'Sends automated SMS/USSD messages to parents about school updates',
    category: 'communication',
    isActive: true,
    lastRun: '30 minutes ago',
    status: 'running',
    successRate: 88,
    automationLevel: 'full'
  },
  {
    id: 'performance-analyzer',
    name: 'Performance Analyzer',
    description: 'Analyzes student performance data and generates insights',
    category: 'performance',
    isActive: false,
    status: 'idle',
    successRate: 92,
    automationLevel: 'basic'
  },
  {
    id: 'fee-reminder',
    name: 'Fee Reminder Agent',
    description: 'Automatically sends fee reminders to parents via SMS/USSD',
    category: 'administration',
    isActive: true,
    lastRun: '1 day ago',
    status: 'completed',
    successRate: 97,
    automationLevel: 'advanced'
  },
  {
    id: 'exam-scheduler',
    name: 'Exam Scheduler',
    description: 'Automatically schedules exams and notifies teachers and students',
    category: 'administration',
    isActive: false,
    status: 'idle',
    successRate: 85,
    automationLevel: 'basic'
  }
];

export const AIAgentManager = () => {
  const [agents, setAgents] = useState<AIAgent[]>(initialAgents);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleAgent = (agentId: string) => {
    setAgents(prev => prev.map(agent => 
      agent.id === agentId 
        ? { ...agent, isActive: !agent.isActive }
        : agent
    ));
    
    const agent = agents.find(a => a.id === agentId);
    toast.success(`${agent?.name} ${agent?.isActive ? 'disabled' : 'enabled'}`);
  };

  const runAgent = (agentId: string) => {
    setAgents(prev => prev.map(agent => 
      agent.id === agentId 
        ? { ...agent, status: 'running', lastRun: 'Just now' }
        : agent
    ));
    
    const agent = agents.find(a => a.id === agentId);
    toast.success(`Running ${agent?.name}...`);
    
    // Simulate completion after 3 seconds
    setTimeout(() => {
      setAgents(prev => prev.map(agent => 
        agent.id === agentId 
          ? { ...agent, status: 'completed' }
          : agent
      ));
      toast.success(`${agent?.name} completed successfully`);
    }, 3000);
  };

  const getStatusIcon = (status: AIAgent['status']) => {
    switch (status) {
      case 'running':
        return <Activity className="h-4 w-4 text-blue-500 animate-pulse" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Bot className="h-4 w-4 text-gray-400" />;
    }
  };

  const getCategoryColor = (category: AIAgent['category']) => {
    switch (category) {
      case 'attendance':
        return 'bg-blue-100 text-blue-800';
      case 'communication':
        return 'bg-green-100 text-green-800';
      case 'performance':
        return 'bg-purple-100 text-purple-800';
      case 'administration':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAgents = selectedCategory === 'all' 
    ? agents 
    : agents.filter(agent => agent.category === selectedCategory);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-4">
        <Button 
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('all')}
        >
          All Agents
        </Button>
        <Button 
          variant={selectedCategory === 'attendance' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('attendance')}
        >
          Attendance
        </Button>
        <Button 
          variant={selectedCategory === 'communication' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('communication')}
        >
          Communication
        </Button>
        <Button 
          variant={selectedCategory === 'performance' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('performance')}
        >
          Performance
        </Button>
        <Button 
          variant={selectedCategory === 'administration' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('administration')}
        >
          Administration
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredAgents.map((agent) => (
          <Card key={agent.id} className="relative">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {getStatusIcon(agent.status)}
                  <CardTitle className="text-lg">{agent.name}</CardTitle>
                </div>
                <Switch
                  checked={agent.isActive}
                  onCheckedChange={() => toggleAgent(agent.id)}
                />
              </div>
              <div className="flex gap-2">
                <Badge className={getCategoryColor(agent.category)}>
                  {agent.category}
                </Badge>
                <Badge variant="outline">
                  {agent.automationLevel}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-sm">
                {agent.description}
              </CardDescription>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Success Rate</span>
                  <span>{agent.successRate}%</span>
                </div>
                <Progress value={agent.successRate} className="h-2" />
              </div>
              
              {agent.lastRun && (
                <div className="text-sm text-muted-foreground">
                  Last run: {agent.lastRun}
                </div>
              )}
              
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => runAgent(agent.id)}
                  disabled={agent.status === 'running'}
                  className="flex-1"
                >
                  {agent.status === 'running' ? (
                    <>
                      <Pause className="h-4 w-4 mr-2" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Run Now
                    </>
                  )}
                </Button>
                <Button size="sm" variant="ghost">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
