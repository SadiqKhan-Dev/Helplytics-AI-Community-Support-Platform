import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Brain, 
  Users, 
  Sparkles, 
  Trophy, 
  HandHelping, 
  Zap, 
  ShieldCheck,
  CheckCircle2,
  Github,
  Twitter,
  Linkedin
} from "lucide-react";

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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How it Works
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
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-4xl">
                  The AI-Powered Hub for <span className="text-primary">Collaborative Help</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl dark:text-gray-400">
                  Connect with experts, share your expertise, and let AI streamline your community collaboration. Build reputation and grow together in the modern era.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/sign-up">
                  <Button size="lg" className="h-12 px-8 text-lg">
                    Start Helping Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/explore">
                  <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
                    Browse Requests
                  </Button>
                </Link>
              </div>
              <div className="pt-8 flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> Secured by Clerk</div>
                <div className="flex items-center gap-2"><Zap className="h-5 w-5" /> Powered by OpenAI</div>
                <div className="flex items-center gap-2"><Users className="h-5 w-5" /> Trusted by 5,000+ Users</div>
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
              <div className="flex flex-col items-center space-y-4 border p-8 rounded-2xl bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">AI Smart Suggestions</h3>
                  <p className="text-muted-foreground">
                    Get automated tag suggestions, urgency detection, and categorization for your help requests.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 border p-8 rounded-2xl bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Collaborative Feed</h3>
                  <p className="text-muted-foreground">
                    A real-time feed of people needing help and experts offering their skills in various categories.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 border p-8 rounded-2xl bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Reputation System</h3>
                  <p className="text-muted-foreground">
                    Earn badges and build a trust score through meaningful contributions and successful collaborations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/10">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple flow for complex problems</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
                    <div>
                      <h4 className="font-bold text-lg">Describe your problem</h4>
                      <p className="text-muted-foreground">Use our AI-assisted editor to explain your challenge. AI will automatically suggest the best tags and urgency level.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
                    <div>
                      <h4 className="font-bold text-lg">Connect with Experts</h4>
                      <p className="text-muted-foreground">Experts with relevant skills get notified and can offer help through our integrated messaging system.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
                    <div>
                      <h4 className="font-bold text-lg">Build Reputation</h4>
                      <p className="text-muted-foreground">Successful collaborations boost your Trust Score and earn you community badges.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative border-2 border-primary/20 rounded-2xl bg-card p-8 shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Brain className="h-48 w-48 text-primary" />
                </div>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <Sparkles className="h-4 w-4" /> AI Suggestion
                  </div>
                  <h3 className="text-2xl font-bold">Your request is 85% ready</h3>
                  <p className="text-muted-foreground">We&apos;ve analyzed your description and suggest these tags:</p>
                  <div className="flex gap-2">
                    <div className="px-3 py-1 bg-secondary rounded-full text-xs font-bold">#nextjs</div>
                    <div className="px-3 py-1 bg-secondary rounded-full text-xs font-bold">#typescript</div>
                    <div className="px-3 py-1 bg-secondary rounded-full text-xs font-bold">#auth</div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <HandHelping className="h-5 w-5 text-green-500" />
                      <span className="text-sm">3 Experts found</span>
                    </div>
                    <Button variant="outline" size="sm">Apply Suggestion</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">Ready to solve better?</h2>
            <p className="max-w-[600px] mx-auto text-primary-foreground/80 md:text-xl mb-8">
              Join thousands of developers and experts who are building the future of community collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up">
                <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
                  Join Helplytics for Free
                </Button>
              </Link>
              <Link href="/explore">
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg bg-transparent border-white hover:bg-white/10 text-white">
                  See what people are building
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Expanded Footer */}
      <footer className="w-full bg-card border-t pt-16 pb-8">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2 space-y-4">
              <Link className="flex items-center gap-2" href="#">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl tracking-tight">Helplytics AI</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                The modern platform for community help, powered by advanced AI and engineered for meaningful human collaboration.
              </p>
              <div className="flex gap-4">
                <Twitter className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
                <Github className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
                <Linkedin className="h-5 w-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">Features</li>
                <li className="hover:text-primary cursor-pointer">AI Intelligence</li>
                <li className="hover:text-primary cursor-pointer">Reputation</li>
                <li className="hover:text-primary cursor-pointer">Roadmap</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">Documentation</li>
                <li className="hover:text-primary cursor-pointer">API</li>
                <li className="hover:text-primary cursor-pointer">Community Guide</li>
                <li className="hover:text-primary cursor-pointer">Expert Program</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">About Us</li>
                <li className="hover:text-primary cursor-pointer">Careers</li>
                <li className="hover:text-primary cursor-pointer">Privacy</li>
                <li className="hover:text-primary cursor-pointer">Terms</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 Helplytics AI. Built with precision and AI.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-green-500" /> Systems Operational</span>
              <span>•</span>
              <Link href="#" className="hover:underline underline-offset-4">Legal Notice</Link>
              <Link href="#" className="hover:underline underline-offset-4">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
