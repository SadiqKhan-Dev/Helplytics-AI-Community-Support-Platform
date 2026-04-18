"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, HandHelping, UserPlus } from "lucide-react";

export default function OnboardingPage() {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  const handleComplete = () => {
    if (role) {
      // In a real app, we'd save this to a database or Clerk metadata
      // For this SaaS flow, we'll just redirect to dashboard
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary/10 p-4">
      <Card className="max-w-2xl w-full border-2">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">Welcome to Helplytics AI</CardTitle>
          <CardDescription className="text-lg">Let&apos;s personalize your experience. How do you plan to use the platform?</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
          <button
            onClick={() => setRole("seeker")}
            className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${
              role === "seeker" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
            }`}
          >
            <div className="p-4 bg-orange-100 rounded-full mb-4">
              <Brain className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-lg">Need Help</h3>
            <p className="text-sm text-center text-muted-foreground mt-2">I have questions or need assistance with projects.</p>
          </button>

          <button
            onClick={() => setRole("helper")}
            className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${
              role === "helper" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
            }`}
          >
            <div className="p-4 bg-green-100 rounded-full mb-4">
              <HandHelping className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-bold text-lg">Can Help</h3>
            <p className="text-sm text-center text-muted-foreground mt-2">I want to share my expertise and help others.</p>
          </button>

          <button
            onClick={() => setRole("both")}
            className={`flex flex-col items-center justify-center p-6 rounded-xl border-2 transition-all ${
              role === "both" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
            }`}
          >
            <div className="p-4 bg-blue-100 rounded-full mb-4">
              <UserPlus className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg">Both</h3>
            <p className="text-sm text-center text-muted-foreground mt-2">I want to both ask for help and offer my skills.</p>
          </button>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button 
            onClick={handleComplete} 
            disabled={!role} 
            className="w-full h-12 text-lg"
          >
            Complete Setup
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            You can always change your preferences in your profile settings.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
