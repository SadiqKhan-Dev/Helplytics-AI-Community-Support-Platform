import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Sparkles, 
  Zap, 
  Target, 
  FileText 
} from "lucide-react";

const aiTools = [
  {
    title: "Smart Tag Suggester",
    description: "Analyze your help request text to generate optimized tags for better visibility.",
    icon: Sparkles,
    status: "Active",
    credits: 1
  },
  {
    title: "Urgency Detector",
    description: "Automatically determine the priority of a request based on context and keywords.",
    icon: Zap,
    status: "Active",
    credits: 2
  },
  {
    title: "Expert Matcher",
    description: "Find the top 5 experts in the community most qualified to help with your specific problem.",
    icon: Target,
    status: "Active",
    credits: 5
  },
  {
    title: "Request Rewriter",
    description: "Polishes your request description to make it clearer and more likely to get responses.",
    icon: FileText,
    status: "Beta",
    credits: 3
  }
];

export default function AICenterPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">AI Intelligence Center</h2>
        <p className="text-muted-foreground">Leverage advanced AI to optimize your collaboration and find the right help faster.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {aiTools.map((tool) => (
          <Card key={tool.title} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="p-3 bg-primary/10 rounded-xl">
                <tool.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                    tool.status === "Active" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                  }`}>
                    {tool.status}
                  </span>
                </div>
                <CardDescription className="mt-1">{tool.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="mt-auto pt-4 flex items-center justify-between border-t">
              <div className="flex items-center gap-2 text-sm">
                <Brain className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">{tool.credits} Credits</span>
              </div>
              <Button size="sm">Launch Tool</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-primary/5 to-secondary/30 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Personal AI Recommendations
          </CardTitle>
          <CardDescription>Our models have analyzed your recent activity and suggests these actions.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-background rounded-lg border shadow-sm">
              <p className="text-sm font-medium">Update your skills profile</p>
              <p className="text-sm text-muted-foreground">
                We&apos;ve noticed you&apos;re active in <span className="text-primary font-semibold">PostgreSQL</span> threads. Adding this to your skills will help us route more relevant requests to you.
              </p>
              <Button variant="link" className="p-0 h-auto mt-2 text-primary">Update Skills →</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
