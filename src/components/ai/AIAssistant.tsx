
import React, { useState } from 'react';
import { Bot, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

// Placeholder for future integration with a real AI API
const generateAIResponse = async (prompt: string): Promise<string> => {
  // This is a placeholder function that simulates an AI response
  // In a real implementation, this would call an AI API (like OpenAI, Hugging Face, etc.)
  console.log("AI prompt received:", prompt);
  
  // Simple keyword-based responses for demo purposes
  if (prompt.toLowerCase().includes("register") || prompt.toLowerCase().includes("registration")) {
    return "To register a new student, navigate to the Student Registration page. You'll need to provide the student's name, date of birth, UPI/NEMIS number, and parent contact information.";
  } else if (prompt.toLowerCase().includes("attendance")) {
    return "Attendance records can be managed by Class Teachers. The system automatically calculates attendance rates and identifies students with attendance issues.";
  } else if (prompt.toLowerCase().includes("performance") || prompt.toLowerCase().includes("grades")) {
    return "Student performance is tracked through the assessment module. You can view class averages, individual student progress, and generate term reports.";
  } else if (prompt.toLowerCase().includes("class transition") || prompt.toLowerCase().includes("promote")) {
    return "Class transitions are typically done at the end of the academic year. The system allows for bulk promotion of students to the next grade level while maintaining their academic history.";
  } else if (prompt.toLowerCase().includes("hello") || prompt.toLowerCase().includes("hi")) {
    return "Hello! I'm your Akili Somo AI assistant. How can I help you today with school management?";
  }
  
  return "I'm still learning about school management. Could you provide more details about your question? You can ask about student registration, attendance tracking, performance reports, or class transitions.";
};

export const AIAssistant = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your Akili Somo AI assistant. How can I help you with managing your school today?'
    }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) return;
    
    // Add user message to conversation
    const userMessage = { role: 'user' as const, content: prompt };
    setConversation(prev => [...prev, userMessage]);
    
    // Clear input
    setPrompt('');
    
    // Set loading state
    setIsLoading(true);
    
    try {
      // Get AI response
      const response = await generateAIResponse(prompt);
      
      // Add AI response to conversation
      setConversation(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error generating AI response:', error);
      setConversation(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error processing your request. Please try again.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto h-[500px] flex flex-col">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <CardTitle>AI Assistant</CardTitle>
        </div>
        <CardDescription className="text-purple-100">
          Ask me anything about school management
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-auto p-4 space-y-4">
        {conversation.map((message, index) => (
          <div 
            key={index} 
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] px-4 py-2 rounded-lg ${
                message.role === 'user' 
                  ? 'bg-purple-600 text-white rounded-tr-none' 
                  : 'bg-gray-100 text-gray-800 rounded-tl-none'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </CardContent>
      
      <CardFooter className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex w-full gap-2">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ask about student registration, attendance..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Thinking...' : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};
