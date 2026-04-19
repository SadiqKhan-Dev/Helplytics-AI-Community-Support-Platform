import { 
  Card, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  MessageSquare, 
  Trophy, 
  HandHelping, 
  Heart,
  Settings,
  MoreVertical
} from "lucide-react";
import { Button } from "@/components/ui/button";

const notifications = [
  {
    id: 1,
    type: "help_offered",
    title: "New Help Offer",
    message: "Sarah Chen offered to help with your 'Next.js API' request.",
    time: "5 mins ago",
    read: false,
    icon: HandHelping,
    color: "text-blue-500",
    bg: "bg-blue-100"
  },
  {
    id: 2,
    type: "message",
    title: "New Message",
    message: "Alex River sent you a direct message regarding the Figma design.",
    time: "45 mins ago",
    read: false,
    icon: MessageSquare,
    color: "text-green-500",
    bg: "bg-green-100"
  },
  {
    id: 3,
    type: "badge",
    title: "Badge Earned",
    message: "You just earned the 'Helpful Pioneer' badge! Keep up the great work.",
    time: "2 hours ago",
    read: true,
    icon: Trophy,
    color: "text-yellow-500",
    bg: "bg-yellow-100"
  },
  {
    id: 4,
    type: "like",
    title: "Contribution Liked",
    message: "Marcus Miller liked your comment on 'Postgres Scaling Advice'.",
    time: "1 day ago",
    read: true,
    icon: Heart,
    color: "text-pink-500",
    bg: "bg-pink-100"
  }
];

export default function NotificationsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Bell className="h-8 w-8 text-primary" />
            Notifications
          </h2>
          <p className="text-muted-foreground">Stay updated with your latest community interactions.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Mark all as read</Button>
          <Button variant="ghost" size="icon"><Settings className="h-4 w-4" /></Button>
        </div>
      </div>

      <div className="space-y-4">
        {notifications.map((notif) => (
          <Card key={notif.id} className={notif.read ? "opacity-75" : "border-primary/20 bg-primary/[0.02]"}>
            <CardHeader className="p-4 flex flex-row items-center gap-4 space-y-0">
              <div className={`p-3 rounded-full ${notif.bg}`}>
                <notif.icon className={`h-5 w-5 ${notif.color}`} />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-sm font-bold">{notif.title}</CardTitle>
                    {!notif.read && <Badge className="h-2 w-2 rounded-full p-0" />}
                  </div>
                  <span className="text-xs text-muted-foreground">{notif.time}</span>
                </div>
                <CardDescription className="text-foreground/80">{notif.message}</CardDescription>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </CardHeader>
          </Card>
        ))}
      </div>
      
      <div className="text-center pt-8">
        <Button variant="link" className="text-muted-foreground">Load older notifications</Button>
      </div>
    </div>
  );
}
