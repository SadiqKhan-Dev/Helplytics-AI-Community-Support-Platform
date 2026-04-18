import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { 
  Brain, 
  HandHelping, 
  Trophy,
  ArrowUpRight,
  MessageSquare,
  PlusCircle,
  Search
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Trust Score",
    value: "842",
    icon: Trophy,
    color: "text-yellow-500",
    description: "Top 5% of contributors"
  },
  {
    label: "Helped Others",
    value: "24",
    icon: HandHelping,
    color: "text-green-500",
    description: "+3 this week"
  },
  {
    label: "AI Credits",
    value: "150",
    icon: Brain,
    color: "text-purple-500",
    description: "Resets in 2 days"
  },
  {
    label: "Active Requests",
    value: "2",
    icon: MessageSquare,
    color: "text-blue-500",
    description: "1 waiting for reply"
  }
];

const recentActivity = [
  {
    title: "Request Solved",
    description: "You helped Sarah with 'Next.js API Routes'",
    time: "2 hours ago",
    icon: Trophy,
    points: "+50"
  },
  {
    title: "New Message",
    description: "Alex commented on your request 'Help with Tailwind CSS'",
    time: "5 hours ago",
    icon: MessageSquare,
    points: null
  },
  {
    title: "Badge Earned",
    description: "You earned the 'Quick Responder' badge",
    time: "1 day ago",
    icon: Trophy,
    points: "+100"
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening with your contributions.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.label}
              </CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest interactions on the platform.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                    <activity.icon className="h-5 w-5" />
                  </div>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {activity.description}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <div className="text-sm text-muted-foreground text-right">{activity.time}</div>
                    {activity.points && (
                      <div className="text-xs text-green-500 text-right">{activity.points} pts</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <Link 
              href="/profile/me" 
              className={cn(buttonVariants({ variant: "outline" }), "w-full mt-6")}
            >
              View All Activity
            </Link>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you might want to perform.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Link 
              href="/request/create" 
              className={cn(buttonVariants({ variant: "default" }), "w-full justify-start gap-2")}
            >
              <PlusCircle className="h-4 w-4" />
              Create New Help Request
            </Link>
            <Link 
              href="/explore" 
              className={cn(buttonVariants({ variant: "outline" }), "w-full justify-start gap-2")}
            >
              <Search className="h-4 w-4" />
              Browse Open Requests
            </Link>
            <Link 
              href="/ai-center" 
              className={cn(buttonVariants({ variant: "outline" }), "w-full justify-start gap-2")}
            >
              <Brain className="h-4 w-4" />
              Use AI Assistant
            </Link>
            
            <div className="pt-6">
              <h4 className="text-sm font-semibold mb-3">AI Recommendations</h4>
              <div className="rounded-lg bg-primary/5 p-4 border border-primary/10">
                <p className="text-sm">
                  We found 3 requests matching your <span className="font-semibold">TypeScript</span> skills.
                </p>
                <Link 
                  href="/explore?skills=typescript"
                  className={cn(buttonVariants({ variant: "link" }), "p-0 h-auto mt-2 text-primary")}
                >
                  View matches <ArrowUpRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
