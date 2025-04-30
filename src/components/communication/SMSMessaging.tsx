
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { MessageSquare, Users, School } from "lucide-react";

const formSchema = z.object({
  messageType: z.string({
    required_error: "Please select a message type",
  }),
  recipients: z.string({
    required_error: "Please select recipients",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
  sendToWhatsapp: z.boolean().default(false),
});

export const SMSMessaging = () => {
  const [isSending, setIsSending] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      messageType: "announcement",
      sendToWhatsapp: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSending(true);
    console.log(values);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Messages sent successfully");
      setIsSending(false);
      form.reset();
    }, 1500);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          Send SMS Messages
        </CardTitle>
        <CardDescription>
          Compose and send SMS messages to parents and guardians without internet access
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="messageType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select message type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="announcement">School Announcement</SelectItem>
                        <SelectItem value="emergency">Emergency Alert</SelectItem>
                        <SelectItem value="fees">Fee Reminder</SelectItem>
                        <SelectItem value="attendance">Attendance Update</SelectItem>
                        <SelectItem value="performance">Performance Report</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The type of message determines the template and priority
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="recipients"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipients</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select recipients" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="all">All Parents</SelectItem>
                        <SelectItem value="grade1">Grade 1 Parents</SelectItem>
                        <SelectItem value="grade2">Grade 2 Parents</SelectItem>
                        <SelectItem value="grade3">Grade 3 Parents</SelectItem>
                        <SelectItem value="grade4">Grade 4 Parents</SelectItem>
                        <SelectItem value="grade5">Grade 5 Parents</SelectItem>
                        <SelectItem value="grade6">Grade 6 Parents</SelectItem>
                        <SelectItem value="custom">Custom Selection</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select which parents will receive this message
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter message subject" {...field} />
                  </FormControl>
                  <FormDescription>
                    The subject will appear at the beginning of the SMS
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message Content</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Type your message here..." 
                      className="min-h-[120px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription className="flex justify-between">
                    <span>Keep messages brief to avoid additional SMS charges</span>
                    <span className="font-medium">{field.value?.length || 0}/160 characters</span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="sendToWhatsapp"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Also send to WhatsApp (if available)</FormLabel>
                    <FormDescription>
                      Message will be sent via WhatsApp to parents who have it enabled
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full" disabled={isSending}>
              {isSending ? "Sending Messages..." : "Send Messages"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
