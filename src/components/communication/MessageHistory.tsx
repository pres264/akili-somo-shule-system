
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MessageSquare, Search, ChevronLeft, ChevronRight } from "lucide-react";

// Sample data for message history
const messageHistory = [
  {
    id: "MSG001",
    date: "2025-04-29T09:15:00",
    subject: "School Closure Notice",
    recipients: "All Parents",
    type: "SMS",
    status: "Delivered",
    deliveryRate: "98%"
  },
  {
    id: "MSG002",
    date: "2025-04-28T14:30:00",
    subject: "Fee Payment Reminder",
    recipients: "Grade 3 Parents",
    type: "SMS+USSD",
    status: "Delivered",
    deliveryRate: "95%"
  },
  {
    id: "MSG003",
    date: "2025-04-26T10:00:00",
    subject: "Parent-Teacher Meeting",
    recipients: "Grade 6 Parents",
    type: "SMS",
    status: "Delivered",
    deliveryRate: "92%"
  },
  {
    id: "MSG004",
    date: "2025-04-25T15:45:00",
    subject: "Sports Day Announcement",
    recipients: "All Parents",
    type: "USSD",
    status: "Delivered",
    deliveryRate: "90%"
  },
  {
    id: "MSG005",
    date: "2025-04-24T11:30:00",
    subject: "COVID-19 Guidelines Update",
    recipients: "All Parents",
    type: "SMS+WhatsApp",
    status: "Delivered",
    deliveryRate: "97%"
  },
];

export const MessageHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit', 
      minute: '2-digit'
    });
  };
  
  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case "Delivered": return "success";
      case "Failed": return "destructive";
      case "Pending": return "warning";
      default: return "secondary";
    }
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Message History
        </CardTitle>
        <CardDescription>
          View past SMS and USSD communications sent to parents
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="relative max-w-sm">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search messages..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Filter</Button>
            <Button variant="outline" size="sm">Export</Button>
          </div>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Delivery Rate</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messageHistory.map((message) => (
                <TableRow key={message.id}>
                  <TableCell>{formatDate(message.date)}</TableCell>
                  <TableCell>{message.subject}</TableCell>
                  <TableCell>{message.recipients}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{message.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusBadgeVariant(message.status)}>
                      {message.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{message.deliveryRate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="flex items-center justify-between space-x-2 py-4">
          <div className="text-sm text-muted-foreground">
            Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
            <span className="font-medium">12</span> results
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              disabled={true}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
