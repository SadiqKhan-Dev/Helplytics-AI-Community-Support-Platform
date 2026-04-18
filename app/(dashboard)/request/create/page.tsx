"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Brain, Loader2, Plus } from "lucide-react";

export default function CreateRequestPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [suggesting, setSuggesting] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const handleSuggestTags = async () => {
    if (!description || description.length < 10) return;
    
    setSuggesting(true);
    // Mocking AI response for now
    setTimeout(() => {
      const mockSuggestions = ["nextjs", "react", "frontend", "optimization"];
      setTags(Array.from(new Set([...tags, ...mockSuggestions])));
      setSuggesting(false);
    }, 1500);
  };

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock submission
    setTimeout(() => {
      setLoading(false);
      router.push("/explore");
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight">Create Help Request</h2>
        <p className="text-muted-foreground">Explain what you need help with and our AI will help categorize it.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Request Details</CardTitle>
            <CardDescription>Be as specific as possible to get the best help.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Title</label>
              <Input 
                placeholder="e.g., Struggling with Prisma connection pooling" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Description</label>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm" 
                  className="text-primary hover:text-primary/80 gap-1 h-8"
                  onClick={handleSuggestTags}
                  disabled={suggesting || !description}
                >
                  {suggesting ? <Loader2 className="h-3 w-3 animate-spin" /> : <Brain className="h-3 w-3" />}
                  AI Tag Suggestions
                </Button>
              </div>
              <Textarea 
                placeholder="Describe your problem, what you've tried, and what you expect..." 
                className="min-h-[150px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dev">Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Urgency</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select urgency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low (Eventually)</SelectItem>
                    <SelectItem value="med">Medium (This week)</SelectItem>
                    <SelectItem value="high">High (ASAP)</SelectItem>
                    <SelectItem value="critical">Critical (Blocking work)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium">Tags</label>
              <div className="flex gap-2 mb-2">
                <Input 
                  placeholder="Add a tag..." 
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <Button type="button" variant="outline" size="icon" onClick={addTag}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 min-h-[40px] p-2 rounded-lg bg-secondary/20 border border-dashed border-border">
                {tags.length === 0 && <span className="text-xs text-muted-foreground p-1">No tags added yet. Try AI suggestions!</span>}
                {tags.map(tag => (
                  <Badge key={tag} className="gap-1 pl-2">
                    {tag}
                    <button type="button" onClick={() => removeTag(tag)} className="hover:text-destructive">×</button>
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t py-4">
            <Button type="button" variant="ghost" onClick={() => router.back()}>Cancel</Button>
            <Button type="submit" disabled={loading}>
              {loading && <Loader2 className="h-4 w-4 animate-spin mr-2" />}
              Post Request
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
