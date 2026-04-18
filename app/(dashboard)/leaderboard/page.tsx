import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Star } from "lucide-react";

const topContributors = [
  {
    rank: 1,
    name: "Alex River",
    username: "ariver_dev",
    trustScore: 2450,
    helped: 124,
    badges: ["Expert", "Pioneer", "Top Helper"],
    avatar: "AR"
  },
  {
    rank: 2,
    name: "Sarah Chen",
    username: "schen_codes",
    trustScore: 2120,
    helped: 98,
    badges: ["Expert", "Quick Responder"],
    avatar: "SC"
  },
  {
    rank: 3,
    name: "Marcus Miller",
    username: "mmiller_ops",
    trustScore: 1980,
    helped: 85,
    badges: ["Problem Solver"],
    avatar: "MM"
  },
  {
    rank: 4,
    name: "Elena Rodriguez",
    username: "elena_r",
    trustScore: 1750,
    helped: 72,
    badges: ["Design Guru"],
    avatar: "ER"
  },
  {
    rank: 5,
    name: "Jordan Smith",
    username: "jsmith",
    trustScore: 1620,
    helped: 64,
    badges: ["Rising Star"],
    avatar: "JS"
  }
];

export default function LeaderboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Trophy className="h-8 w-8 text-yellow-500" />
            Community Leaderboard
          </h2>
          <p className="text-muted-foreground">Recognizing our most helpful and active community members.</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-yellow-50/50 border-yellow-200 dark:bg-yellow-900/10 dark:border-yellow-900">
          <CardHeader className="pb-2">
            <CardDescription className="text-yellow-700 dark:text-yellow-500 font-bold uppercase text-[10px]">Current Season</CardDescription>
            <CardTitle className="text-2xl">Season 1: Alpha</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Ends in 12 days. Top 10 will receive a unique Pioneer Badge.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2 text-center">
            <CardTitle className="text-3xl font-bold">4.8k</CardTitle>
            <CardDescription>Total Help Requests Solved</CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="pb-2 text-center">
            <CardTitle className="text-3xl font-bold">12k+</CardTitle>
            <CardDescription>Community Trust Points Earned</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Top Contributors</CardTitle>
          <CardDescription>Based on Trust Score, helpfulness, and community feedback.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {topContributors.map((user) => (
              <div key={user.username} className="flex items-center justify-between p-4 rounded-xl border bg-card hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-8 font-bold text-muted-foreground">
                    {user.rank === 1 ? <Trophy className="h-6 w-6 text-yellow-500" /> : 
                     user.rank === 2 ? <Medal className="h-6 w-6 text-slate-400" /> :
                     user.rank === 3 ? <Medal className="h-6 w-6 text-amber-600" /> : user.rank}
                  </div>
                  <Avatar className="h-12 w-12 border-2 border-primary/10">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-primary/5 text-primary font-bold">{user.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="font-bold">{user.name}</p>
                      <span className="text-xs text-muted-foreground">@{user.username}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {user.badges.map(badge => (
                        <Badge key={badge} variant="secondary" className="text-[10px] py-0 px-1.5 h-4">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 justify-end font-bold text-lg">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    {user.trustScore}
                  </div>
                  <p className="text-xs text-muted-foreground">{user.helped} solved</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
