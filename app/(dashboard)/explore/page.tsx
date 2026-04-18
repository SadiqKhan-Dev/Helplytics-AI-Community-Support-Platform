import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Filter, 
  Clock, 
  MessageSquare, 
  User,
  AlertCircle
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const mockRequests = [
  {
    id: "1",
    title: "Need help with Next.js 14 Server Actions",
    description: "I'm struggling to implement a form with Server Actions and revalidation. Looking for some guidance on best practices.",
    category: "Development",
    urgency: "High",
    tags: ["nextjs", "typescript", "server-actions"],
    author: "dev_guy",
    time: "30 mins ago",
    replies: 4
  },
  {
    id: "2",
    title: "UI Design Review for SaaS Landing Page",
    description: "Created a landing page in Figma. Need feedback on the color palette and typography consistency.",
    category: "Design",
    urgency: "Medium",
    tags: ["figma", "ui-ux", "design-review"],
    author: "pixel_perfect",
    time: "2 hours ago",
    replies: 2
  },
  {
    id: "3",
    title: "How to scale Postgres with Prisma?",
    description: "Our database connections are maxing out during peak traffic. Need advice on connection pooling.",
    category: "DevOps",
    urgency: "Critical",
    tags: ["postgresql", "prisma", "database"],
    author: "backend_wizard",
    time: "5 hours ago",
    replies: 7
  },
  {
    id: "4",
    title: "Stripe Connect Integration issues",
    description: "Having trouble with the KYC flow for onboarded users. Has anyone done this recently?",
    category: "Payments",
    urgency: "Medium",
    tags: ["stripe", "fintech", "integration"],
    author: "startup_founder",
    time: "1 day ago",
    replies: 1
  }
];

export default function ExplorePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Explore Requests</h2>
          <p className="text-muted-foreground">Find someone to help or get inspired by what others are building.</p>
        </div>
        <Link 
          href="/request/create" 
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Create Request
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search requests, skills, or tags..." className="pl-10" />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="grid gap-6">
        {mockRequests.map((request) => (
          <Card key={request.id} className="hover:border-primary/50 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <Link href={`/request/${request.id}`} className="hover:underline">
                    <CardTitle className="text-xl">{request.title}</CardTitle>
                  </Link>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><User className="h-3 w-3" /> {request.author}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {request.time}</span>
                  </div>
                </div>
                <Badge 
                  variant={
                    request.urgency === "Critical" ? "destructive" : 
                    request.urgency === "High" ? "default" : "secondary"
                  }
                  className={request.urgency === "High" ? "bg-orange-500 hover:bg-orange-600" : ""}
                >
                  {request.urgency}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {request.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {request.tags.map(tag => (
                  <Badge key={tag} variant="outline" className="bg-primary/5">#{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-3 border-t flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MessageSquare className="h-4 w-4" /> {request.replies} replies</span>
                <span className="flex items-center gap-1"><AlertCircle className="h-4 w-4" /> {request.category}</span>
              </div>
              <Link 
                href={`/request/${request.id}`}
                className={cn(buttonVariants({ variant: "default", size: "sm" }))}
              >
                I Can Help
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
