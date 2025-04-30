
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { USSDSetup } from "./USSDSetup";
import { SMSMessaging } from "./SMSMessaging";
import { MessageHistory } from "./MessageHistory";

export const CommunicationDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Communication Center</h1>
      
      <Tabs defaultValue="sms" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="sms">SMS Messaging</TabsTrigger>
          <TabsTrigger value="ussd">USSD Setup</TabsTrigger>
          <TabsTrigger value="history">Message History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sms" className="mt-6">
          <SMSMessaging />
        </TabsContent>
        
        <TabsContent value="ussd" className="mt-6">
          <USSDSetup />
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <MessageHistory />
        </TabsContent>
      </Tabs>
    </div>
  );
};
