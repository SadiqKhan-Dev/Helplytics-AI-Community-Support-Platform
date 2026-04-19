import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Star, 
  MapPin, 
  Calendar, 
  Github, 
  Twitter, 
  Mail,
  CheckCircle2,
  Brain,
  MessageSquare
} from "lucide-react";

export default function ProfilePage({ params }: { params: { username: string } }) {
  const username = params.username;
  const isMe = username === "me";
  const displayUsername = isMe ? "SadiqKhan-Dev" : username;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header Profile Section */}
      <Card className="border-b-4 border-primary">
        <CardContent className="p-0">
          <div className="h-48 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/50"></div>
          </div>
          <div className="px-8 pb-8 -mt-12 relative flex flex-col md:flex-row items-end gap-6">
            <Avatar className="h-32 w-32 border-4 border-background shadow-xl rounded-2xl">
              <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">{displayUsername[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex-1 pb-2 space-y-2">
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-bold">{displayUsername}</h2>
                <Badge variant="secondary" className="bg-primary/10 text-primary">Pro Helper</Badge>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-medium">
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> San Francisco, CA</span>
                <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Joined April 2026</span>
                <span className="flex items-center gap-1"><Mail className="h-4 w-4" /> contact@{displayUsername}.dev</span>
              </div>
            </div>
            <div className="flex gap-2 pb-2">
              <Button variant="outline" size="sm" className="gap-2"><Github className="h-4 w-4" /> Github</Button>
              <Button variant="outline" size="sm" className="gap-2"><Twitter className="h-4 w-4" /> Twitter</Button>
              <Button size="sm" className="px-8">{isMe ? "Edit Profile" : "Follow"}</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-8">
          {/* Stats Card */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Community Impact</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 rounded-xl bg-secondary/20">
                <div className="text-2xl font-bold">1.2k</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase">Trust Points</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/20">
                <div className="text-2xl font-bold">42</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase">Help Solved</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/20">
                <div className="text-2xl font-bold">15</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase">Badges</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/20">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-[10px] text-muted-foreground font-bold uppercase">Success Rate</div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Verified Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {["TypeScript", "React", "Next.js", "Tailwind", "PostgreSQL", "Prisma", "AWS", "Figma", "Node.js"].map(skill => (
                <Badge key={skill} variant="outline" className="px-3 py-1 font-medium bg-background border-primary/20">{skill}</Badge>
              ))}
            </CardContent>
          </Card>

          {/* Badges Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Earned Badges
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4 pt-2">
              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center border-2 border-yellow-200 shadow-sm" title="Top Helper">
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-200 shadow-sm" title="Quick Responder">
                <Star className="h-6 w-6 text-blue-600" />
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-200 shadow-sm" title="Problem Solver">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center border-2 border-border shadow-sm" title="Newbie">
                <Calendar className="h-6 w-6 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs defaultValue="activity" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-12 p-1">
              <TabsTrigger value="activity">Recent Activity</TabsTrigger>
              <TabsTrigger value="requests">Help Requests</TabsTrigger>
              <TabsTrigger value="contributions">Contributions</TabsTrigger>
            </TabsList>
            <TabsContent value="activity" className="pt-6">
              <div className="space-y-6">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex gap-4 items-start pb-6 border-b last:border-0">
                    <div className="p-2 bg-primary/10 rounded-full mt-1">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium">
                        <span className="font-bold">{displayUsername}</span> replied to <span className="text-primary font-bold">Help with Prisma connection pooling</span>
                      </p>
                      <p className="text-sm text-muted-foreground italic">&quot;You can use Prisma Accelerate for connection pooling at the edge...&quot;</p>
                      <p className="text-xs text-muted-foreground">{i * 2} hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="requests" className="pt-6">
              <div className="text-center py-20 bg-secondary/20 rounded-xl border-2 border-dashed border-border">
                <CardDescription className="text-lg">No active help requests from this user.</CardDescription>
                <Button variant="link" className="text-primary font-bold mt-2">View archives</Button>
              </div>
            </TabsContent>
            <TabsContent value="contributions" className="pt-6">
              <div className="space-y-4">
                {[1, 2].map(i => (
                  <Card key={i}>
                    <CardHeader className="py-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Helped solved React testing issue</CardTitle>
                        <Badge className="bg-green-100 text-green-700">+100 TP</Badge>
                      </div>
                      <CardDescription>Solved by providing a custom vitest mock strategy.</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
