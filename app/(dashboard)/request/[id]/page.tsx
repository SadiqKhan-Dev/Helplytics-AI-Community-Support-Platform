"use client";

import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Clock, 
  MessageSquare, 
  AlertCircle, 
  ChevronLeft,
  CheckCircle2,
  Share2,
  Flag
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function RequestDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isOffering, setIsOffering] = useState(false);
  const [isSolved, setIsSolved] = useState(false);

  // Mock data for the specific request
  const request = {
    id: params.id,
    title: "Need help with Next.js 14 Server Actions",
    description: "I'm struggling to implement a form with Server Actions and revalidation. I have a form that submits data correctly, but the page doesn't refresh with the new data unless I manually reload. I've tried revalidatePath, but it doesn't seem to trigger. Looking for someone who has successfully implemented this in a production environment.",
    category: "Development",
    urgency: "High",
    tags: ["nextjs", "typescript", "server-actions"],
    author: "dev_guy",
    time: "30 mins ago",
    replies: 4,
    status: "open"
  };

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6">
      <Button variant="ghost" onClick={() => router.back()} className="gap-2 -ml-2">
        <ChevronLeft className="h-4 w-4" /> Back to Explore
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-2">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge variant={isSolved ? "outline" : "default"} className={isSolved ? "text-green-600 border-green-200 bg-green-50" : "bg-orange-500"}>
                  {isSolved ? "Solved" : "Active Request"}
                </Badge>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon"><Share2 className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon"><Flag className="h-4 w-4" /></Button>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold">{request.title}</CardTitle>
              <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback>DG</AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-foreground">{request.author}</span>
                </div>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {request.time}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-primary font-medium">
                  <AlertCircle className="h-3.5 w-3.5" /> {request.category}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground whitespace-pre-wrap">
                {request.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {request.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-primary/5 hover:bg-primary/10 transition-colors">#{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="bg-secondary/10 border-t p-6">
              {!isSolved ? (
                <div className="flex w-full gap-4">
                  <Button 
                    className="flex-1 h-12 text-lg" 
                    onClick={() => setIsOffering(!isOffering)}
                    variant={isOffering ? "outline" : "default"}
                  >
                    {isOffering ? "Cancel Offer" : "I Can Help"}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="h-12 px-6"
                    onClick={() => setIsSolved(true)}
                  >
                    <CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
                    Mark as Solved
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-center w-full py-2 gap-2 text-green-600 font-bold">
                  <CheckCircle2 className="h-6 w-6" />
                  This request has been resolved
                </div>
              )}
            </CardFooter>
          </Card>

          {isOffering && (
            <Card className="border-primary bg-primary/5 animate-in fade-in slide-in-from-top-4 duration-300">
              <CardHeader>
                <CardTitle>Send your help offer</CardTitle>
                <CardDescription>Tell {request.author} why you&apos;re the right person to help.</CardDescription>
              </CardHeader>
              <CardContent>
                <textarea 
                  className="w-full min-h-[100px] p-3 rounded-md border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Include your relevant experience and how you can help..."
                ></textarea>
              </CardContent>
              <CardFooter className="justify-end">
                <Button onClick={() => {
                  setIsOffering(false);
                  router.push("/messages");
                }}>Send Message & Offer</Button>
              </CardFooter>
            </Card>
          )}

          <div className="space-y-4">
            <h3 className="font-bold text-xl flex items-center gap-2">
              <MessageSquare className="h-5 w-5" /> 
              Replies ({request.replies})
            </h3>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <Card key={i}>
                  <CardHeader className="py-4 flex flex-row items-center gap-4 space-y-0">
                    <Avatar>
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm">helper_user_{i}</span>
                        <span className="text-xs text-muted-foreground">{i}h ago</span>
                      </div>
                      <p className="text-sm mt-1">I had the same issue! Make sure you&apos;re wrapping your server action in a `useTransition` hook if you want real-time UI updates.</p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">About the Author</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-center">
              <Avatar className="h-20 w-20 mx-auto border-4 border-secondary">
                <AvatarFallback className="text-2xl">DG</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-bold text-lg">dev_guy</h4>
                <p className="text-sm text-muted-foreground">Trust Score: 452</p>
              </div>
              <div className="flex flex-wrap justify-center gap-1">
                <Badge variant="secondary" className="text-[10px]">React</Badge>
                <Badge variant="secondary" className="text-[10px]">Next.js</Badge>
                <Badge variant="secondary" className="text-[10px]">Node</Badge>
              </div>
              <Link 
                href="/profile/dev_guy"
                className={cn(buttonVariants({ variant: "outline" }), "w-full")}
              >
                View Profile
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Request Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Urgency:</span>
                <span className="font-medium text-orange-600">{request.urgency}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Category:</span>
                <span className="font-medium">{request.category}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Location:</span>
                <span className="font-medium">Remote</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
