import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, Sparkles, MessageSquare, Trophy } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <Link className="flex items-center justify-center gap-2" href="#">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight">Helplytics AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/explore">
            Explore
          </Link>
          <Link href="/sign-in">
            <Button variant="ghost" size="sm">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button size="sm">Get Started</Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground mb-4">
                  Introducing Helplytics AI v1.0
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none max-w-3xl">
                  The AI-Powered Hub for <span className="text-primary">Collaborative Help</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl dark:text-gray-400">
                  Connect with experts, offer your skills, and let AI streamline your community collaboration. Build reputation and grow together.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/sign-up">
                  <Button size="lg" className="h-12 px-8">
                    Start Helping Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/explore">
                  <Button variant="outline" size="lg" className="h-12 px-8">
                    Browse Requests
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Engineered for Impact</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to manage community requests and contributions at scale.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI Smart Suggestions</h3>
                <p className="text-center text-muted-foreground">
                  Get automated tag suggestions, urgency detection, and categorization for your help requests.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Collaborative Feed</h3>
                <p className="text-center text-muted-foreground">
                  A real-time feed of people needing help and experts offering their skills in various categories.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Reputation System</h3>
                <p className="text-center text-muted-foreground">
                  Earn badges and build a trust score through meaningful contributions and successful collaborations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Smart Messaging</h3>
                <p className="text-center text-muted-foreground">
                  Seamless communication between helpers and requestors with integrated context from help requests.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Skill Matching</h3>
                <p className="text-center text-muted-foreground">
                  Our algorithm matches the right experts to the right requests based on skills and urgency.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-primary/10 rounded-full">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Modern Flow</h3>
                <p className="text-center text-muted-foreground">
                  A sleek, production-ready interface inspired by industry leaders like Notion and Linear.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2026 Helplytics AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
