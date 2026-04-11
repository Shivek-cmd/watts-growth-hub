import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Props {
  compact?: boolean;
}

const NewsletterBlock = ({ compact }: Props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))] h-12 sm:max-w-xs"
        />
        <Button type="submit" variant="hero" className="h-12 shrink-0">Subscribe</Button>
      </form>
    );
  }

  return (
    <div className="text-center">
      <p className="section-label">Newsletter</p>
      <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">
        The Ritesh Watts Letter
      </h2>
      <p className="mt-4 max-w-lg mx-auto text-muted-foreground">
        Get practical ideas on founder mindset, AI leverage, cross-border opportunity, and wealth-building strategies — delivered weekly.
      </p>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:max-w-md mx-auto">
        <Input
          type="email"
          placeholder="Email Address *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))] h-12"
        />
        <Button type="submit" variant="hero" className="h-12 shrink-0">Subscribe</Button>
      </form>
      <p className="mt-3 text-xs text-muted-foreground">No spam. Only useful insights. Unsubscribe anytime.</p>
    </div>
  );
};

export default NewsletterBlock;
