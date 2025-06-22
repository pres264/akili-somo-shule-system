
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, MessageSquare, Phone, Calendar, Filter } from 'lucide-react';
import { format } from 'date-fns';

interface Message {
  id: string;
  recipient: string;
  content: string;
  type: 'SMS' | 'USSD';
  status: 'sent' | 'delivered' | 'failed' | 'pending';
  timestamp: Date;
  studentName?: string;
  className?: string;
}

const sampleMessages: Message[] = [
  {
    id: '1',
    recipient: '+254712345678',
    content: 'Your child John Doe was absent today. Please contact the school.',
    type: 'SMS',
    status: 'delivered',
    timestamp: new Date(2024, 0, 15, 9, 30),
    studentName: 'John Doe',
    className: '4W'
  },
  {
    id: '2',
    recipient: '+254723456789',
    content: 'School fees reminder: Ksh 5,000 balance due by Jan 30th.',
    type: 'SMS',
    status: 'sent',
    timestamp: new Date(2024, 0, 15, 14, 15),
    studentName: 'Mary Smith',
    className: '6A'
  },
  {
    id: '3',
    recipient: '+254734567890',
    content: 'USSD Session: Check exam results',
    type: 'USSD',
    status: 'delivered',
    timestamp: new Date(2024, 0, 14, 16, 45),
    studentName: 'Peter Johnson',
    className: '5B'
  },
  {
    id: '4',
    recipient: '+254745678901',
    content: 'Parent-teacher meeting scheduled for Feb 1st at 2:00 PM.',
    type: 'SMS',
    status: 'failed',
    timestamp: new Date(2024, 0, 14, 11, 20),
    studentName: 'Sarah Wilson',
    className: '3C'
  },
  {
    id: '5',
    recipient: '+254756789012',
    content: 'Congratulations! Your child scored 85% in Mathematics.',
    type: 'SMS',
    status: 'delivered',
    timestamp: new Date(2024, 0, 13, 13, 10),
    studentName: 'David Brown',
    className: '7A'
  }
];

export const MessageHistory = () => {
  const [messages, setMessages] = useState<Message[]>(sampleMessages);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'SMS' | 'USSD'>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'sent' | 'delivered' | 'failed' | 'pending'>('all');

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.recipient.includes(searchTerm) ||
                         message.studentName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.className?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = filterType === 'all' || message.type === filterType;
    const matchesStatus = filterStatus === 'all' || message.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const getStatusBadgeVariant = (status: Message['status']) => {
    switch (status) {
      case 'delivered':
        return 'default'; // Changed from 'success' to 'default'
      case 'sent':
        return 'secondary';
      case 'failed':
        return 'destructive';
      case 'pending':
        return 'outline'; // Changed from 'warning' to 'outline'
      default:
        return 'secondary';
    }
  };

  const getStatusColor = (status: Message['status']) => {
    switch (status) {
      case 'delivered':
        return 'text-green-600';
      case 'sent':
        return 'text-blue-600';
      case 'failed':
        return 'text-red-600';
      case 'pending':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Message History
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search messages, names, or phone numbers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterType === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterType('all')}
              >
                All
              </Button>
              <Button
                variant={filterType === 'SMS' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterType('SMS')}
              >
                SMS
              </Button>
              <Button
                variant={filterType === 'USSD' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterType('USSD')}
              >
                USSD
              </Button>
            </div>
          </div>

          {/* Status Filter */}
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={filterStatus === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus('all')}
            >
              All Status
            </Button>
            <Button
              variant={filterStatus === 'delivered' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus('delivered')}
            >
              Delivered
            </Button>
            <Button
              variant={filterStatus === 'sent' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus('sent')}
            >
              Sent
            </Button>
            <Button
              variant={filterStatus === 'failed' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus('failed')}
            >
              Failed
            </Button>
            <Button
              variant={filterStatus === 'pending' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilterStatus('pending')}
            >
              Pending
            </Button>
          </div>

          {/* Messages List */}
          <ScrollArea className="h-[400px]">
            <div className="space-y-3">
              {filteredMessages.map((message) => (
                <Card key={message.id} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      {message.type === 'SMS' ? (
                        <MessageSquare className="h-4 w-4 text-blue-500" />
                      ) : (
                        <Phone className="h-4 w-4 text-green-500" />
                      )}
                      <span className="font-medium">{message.recipient}</span>
                      <Badge variant={getStatusBadgeVariant(message.status)}>
                        <span className={getStatusColor(message.status)}>
                          {message.status}
                        </span>
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {format(message.timestamp, 'MMM d, HH:mm')}
                    </div>
                  </div>
                  
                  {message.studentName && (
                    <div className="text-sm text-muted-foreground mb-2">
                      Student: {message.studentName} ({message.className})
                    </div>
                  )}
                  
                  <p className="text-sm bg-muted p-2 rounded">
                    {message.content}
                  </p>
                </Card>
              ))}
              
              {filteredMessages.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No messages found matching your criteria.
                </div>
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};
