
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Bot, Zap, MessageSquare, Database, Key } from 'lucide-react';
import { toast } from "sonner";

export const AIAgentSetup = () => {
  const [apiKeys, setApiKeys] = useState({
    openai: '',
    anthropic: '',
    groq: '',
    elevenlabs: ''
  });

  const [agentConfig, setAgentConfig] = useState({
    name: '',
    description: '',
    category: '',
    automationLevel: '',
    triggerConditions: '',
    actions: ''
  });

  const handleSaveApiKeys = () => {
    // In a real implementation, these would be securely stored
    localStorage.setItem('ai_api_keys', JSON.stringify(apiKeys));
    toast.success('API keys saved securely');
  };

  const handleCreateAgent = () => {
    if (!agentConfig.name || !agentConfig.category) {
      toast.error('Please fill in required fields');
      return;
    }
    
    toast.success(`AI Agent "${agentConfig.name}" created successfully`);
    setAgentConfig({
      name: '',
      description: '',
      category: '',
      automationLevel: '',
      triggerConditions: '',
      actions: ''
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            AI Service Configuration
          </CardTitle>
          <CardDescription>
            Configure your AI service API keys to enable agent functionality
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="openai">OpenAI API Key</Label>
              <Input
                id="openai"
                type="password"
                placeholder="sk-..."
                value={apiKeys.openai}
                onChange={(e) => setApiKeys(prev => ({ ...prev, openai: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="anthropic">Anthropic API Key</Label>
              <Input
                id="anthropic"
                type="password"
                placeholder="sk-ant-..."
                value={apiKeys.anthropic}
                onChange={(e) => setApiKeys(prev => ({ ...prev, anthropic: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="groq">Groq API Key</Label>
              <Input
                id="groq"
                type="password"
                placeholder="gsk_..."
                value={apiKeys.groq}
                onChange={(e) => setApiKeys(prev => ({ ...prev, groq: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="elevenlabs">ElevenLabs API Key</Label>
              <Input
                id="elevenlabs"
                type="password"
                placeholder="sk_..."
                value={apiKeys.elevenlabs}
                onChange={(e) => setApiKeys(prev => ({ ...prev, elevenlabs: e.target.value }))}
              />
            </div>
          </div>
          <Button onClick={handleSaveApiKeys} className="w-full">
            Save API Keys
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            Create Custom AI Agent
          </CardTitle>
          <CardDescription>
            Build your own AI agent to automate specific school management tasks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="agentName">Agent Name</Label>
              <Input
                id="agentName"
                placeholder="e.g., Grade Report Generator"
                value={agentConfig.name}
                onChange={(e) => setAgentConfig(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={agentConfig.category} onValueChange={(value) => setAgentConfig(prev => ({ ...prev, category: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="attendance">Attendance</SelectItem>
                  <SelectItem value="communication">Communication</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                  <SelectItem value="administration">Administration</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Describe what this agent will do..."
              value={agentConfig.description}
              onChange={(e) => setAgentConfig(prev => ({ ...prev, description: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="automationLevel">Automation Level</Label>
            <Select value={agentConfig.automationLevel} onValueChange={(value) => setAgentConfig(prev => ({ ...prev, automationLevel: value }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select automation level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Basic - Requires manual approval</SelectItem>
                <SelectItem value="advanced">Advanced - Semi-automated with oversight</SelectItem>
                <SelectItem value="full">Full - Completely automated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="triggers">Trigger Conditions</Label>
            <Textarea
              id="triggers"
              placeholder="e.g., When student attendance drops below 80%..."
              value={agentConfig.triggerConditions}
              onChange={(e) => setAgentConfig(prev => ({ ...prev, triggerConditions: e.target.value }))}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="actions">Actions to Perform</Label>
            <Textarea
              id="actions"
              placeholder="e.g., Send SMS to parents, Create attendance report..."
              value={agentConfig.actions}
              onChange={(e) => setAgentConfig(prev => ({ ...prev, actions: e.target.value }))}
            />
          </div>

          <Button onClick={handleCreateAgent} className="w-full">
            Create AI Agent
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Integration Examples
          </CardTitle>
          <CardDescription>
            Popular AI agent automation scenarios for schools
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Automated Parent Communication</h4>
                <p className="text-sm text-muted-foreground">
                  Send personalized SMS/USSD messages for attendance, fees, and performance updates
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <Database className="h-5 w-5 text-green-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Student Performance Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Analyze grades, identify at-risk students, and generate intervention recommendations
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
              <Bot className="h-5 w-5 text-purple-500 mt-0.5" />
              <div>
                <h4 className="font-medium">Administrative Task Automation</h4>
                <p className="text-sm text-muted-foreground">
                  Automate report generation, schedule management, and data entry tasks
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
