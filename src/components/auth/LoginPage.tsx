
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const LoginPage = () => {
  const [role, setRole] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="absolute inset-0 bg-[url('/kenya-pattern.png')] opacity-5 z-0" />
      
      <Card className="w-full max-w-md mx-4 bg-white/80 backdrop-blur-sm shadow-xl z-10">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Akili Somo
          </CardTitle>
          <p className="text-gray-500">Welcome back to your learning dashboard</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="principal">Principal</SelectItem>
                <SelectItem value="teacher">Teacher</SelectItem>
                <SelectItem value="class-teacher">Class Teacher</SelectItem>
                <SelectItem value="parent">Parent</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Input type="text" placeholder="School ID" className="w-full" />
          </div>
          
          <div className="space-y-2">
            <Input type="email" placeholder="Email Address" className="w-full" />
          </div>
          
          <div className="space-y-2">
            <Input type="password" placeholder="Password" className="w-full" />
          </div>
          
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
            Sign In
          </Button>
          
          <div className="flex items-center justify-between">
            <Button variant="link" className="text-sm text-gray-500">
              Forgot password?
            </Button>
            <Button variant="link" className="text-sm text-purple-600">
              Sign up
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
