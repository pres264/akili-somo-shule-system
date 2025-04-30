
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { PhoneCall, Check, Copy, RefreshCw } from "lucide-react";
import { toast } from "sonner";

export const USSDSetup = () => {
  const [isConfigured, setIsConfigured] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const shortCode = "*123*456#";
  
  const ussdFeatures = [
    { name: "Check Student Attendance", code: "*123*456*1#", enabled: true },
    { name: "View Fee Balance", code: "*123*456*2#", enabled: true },
    { name: "Exam Results", code: "*123*456*3#", enabled: true },
    { name: "School Calendar", code: "*123*456*4#", enabled: true },
    { name: "Report Absence", code: "*123*456*5#", enabled: true }
  ];
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };
  
  const refreshUSSDConfig = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("USSD configuration refreshed!");
    }, 1500);
  };
  
  const toggleFeature = (index: number) => {
    toast.success(`Feature status updated!`);
  };
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PhoneCall className="h-5 w-5" />
            USSD Configuration
          </CardTitle>
          <CardDescription>
            Configure USSD short codes for parents without smartphones or internet access
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="rounded-md bg-muted p-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-sm font-medium">School USSD Short Code</h3>
                  <p className="text-2xl font-bold text-primary mt-1">{shortCode}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Share this with parents to access school information via USSD
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(shortCode)}>
                    <Copy className="h-4 w-4 mr-2" /> Copy
                  </Button>
                  <Button size="sm" variant="outline" onClick={refreshUSSDConfig} disabled={isLoading}>
                    <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} /> 
                    {isLoading ? "Refreshing..." : "Refresh"}
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Status</h3>
              <div className="flex items-center gap-2 text-sm">
                <div className={`h-2.5 w-2.5 rounded-full ${isConfigured ? "bg-green-500" : "bg-red-500"}`}></div>
                <span>{isConfigured ? "USSD Service Active" : "USSD Service Inactive"}</span>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div>
              <h3 className="text-sm font-medium mb-4">USSD Menu Features</h3>
              <div className="space-y-4">
                {ussdFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium">{feature.name}</div>
                      <div className="text-xs text-muted-foreground">{feature.code}</div>
                    </div>
                    <Switch 
                      checked={feature.enabled} 
                      onCheckedChange={() => toggleFeature(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Parent Instructions</CardTitle>
          <CardDescription>
            Share these simple instructions with parents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>Dial <span className="font-mono">{shortCode}</span> from any mobile phone</li>
            <li>Select an option from the menu (1-5)</li>
            <li>Follow the prompts to enter student ID when requested</li>
            <li>Standard network rates apply for USSD sessions</li>
          </ul>
          <Button variant="outline" className="mt-4">
            Download Parent USSD Guide (PDF)
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
