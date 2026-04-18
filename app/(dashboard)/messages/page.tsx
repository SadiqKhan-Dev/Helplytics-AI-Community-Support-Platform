import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search, Send, MoreHorizontal, Phone, Video } from "lucide-react";

const contacts = [
  { id: 1, name: "Sarah Chen", lastMsg: "Thanks for the help with Next.js!", time: "2m", active: true, avatar: "SC" },
  { id: 2, name: "Alex River", lastMsg: "When are you free to chat about the Figma design?", time: "1h", active: false, avatar: "AR" },
  { id: 3, name: "Marcus Miller", lastMsg: "The connection pooling issue is resolved.", time: "3h", active: false, avatar: "MM" },
  { id: 4, name: "Elena Rodriguez", lastMsg: "Did you see my review on your request?", time: "Yesterday", active: false, avatar: "ER" },
];

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-140px)] flex gap-4">
      {/* Sidebar - Contacts */}
      <Card className="w-80 flex flex-col">
        <CardHeader className="p-4">
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="text-xl">Messages</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search messages" className="pl-8 h-9" />
          </div>
        </CardHeader>
        <CardContent className="p-0 flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-1 p-2">
              {contacts.map((contact) => (
                <div 
                  key={contact.id} 
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                    contact.active ? "bg-primary/10" : "hover:bg-secondary"
                  }`}
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback>{contact.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <p className="font-semibold text-sm truncate">{contact.name}</p>
                      <span className="text-[10px] text-muted-foreground">{contact.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{contact.lastMsg}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Main Chat Area */}
      <Card className="flex-1 flex flex-col">
        <CardHeader className="p-4 border-b flex flex-row items-center justify-between space-y-0">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-sm font-bold">Sarah Chen</CardTitle>
              <CardDescription className="text-xs text-green-500 font-medium">Online</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon"><Phone className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><Video className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-4 overflow-hidden relative">
          <ScrollArea className="h-full pr-4">
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-secondary p-3 rounded-2xl rounded-tl-none max-w-[70%]">
                  <p className="text-sm">Hi! I saw your request about Next.js 14 Server Actions. I&apos;ve been working with them extensively.</p>
                  <span className="text-[10px] text-muted-foreground mt-1 block">10:42 AM</span>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-none max-w-[70%] shadow-md">
                  <p className="text-sm">That&apos;s great! I&apos;m specifically having trouble with form revalidation after a successful action.</p>
                  <span className="text-[10px] text-primary-foreground/70 mt-1 block">10:45 AM</span>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-secondary p-3 rounded-2xl rounded-tl-none max-w-[70%]">
                  <p className="text-sm">Ah, are you using `revalidatePath` or `revalidateTag`? Also, make sure your action is actually awaited in the form component.</p>
                  <span className="text-[10px] text-muted-foreground mt-1 block">10:47 AM</span>
                </div>
              </div>
            </div>
          </ScrollArea>
        </CardContent>
        <div className="p-4 border-t flex gap-2">
          <Input placeholder="Type your message..." className="flex-1" />
          <Button size="icon"><Send className="h-4 w-4" /></Button>
        </div>
      </Card>
    </div>
  );
}
