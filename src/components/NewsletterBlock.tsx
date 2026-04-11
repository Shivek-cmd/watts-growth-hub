import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface Props {
  compact?: boolean;
}

const NewsletterBlock = ({ compact }: Props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Thank you for subscribing!");
    setEmail("");
    setName("");
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-muted border-border"
        />
        <Button type="submit" variant="hero">Subscribe</Button>
      </form>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card p-8 md:p-12 glow-primary">
      <h2 className="text-2xl font-bold md:text-3xl">The Ritesh Watts Letter</h2>
      <p className="mt-2 text-sm text-secondary font-medium">
        Weekly insights on building smarter businesses, moving across borders, and growing long-term wealth.
      </p>
      <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
        Get practical ideas on founder mindset, AI leverage, cross-border opportunity, and wealth-building strategies — delivered to your inbox every week.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end">
        <Input
          type="text"
          placeholder="First Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-muted border-border"
        />
        <Input
          type="email"
          placeholder="Email Address *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-muted border-border"
        />
        <Button type="submit" variant="hero" className="sm:shrink-0">Subscribe</Button>
      </form>
      <p className="mt-3 text-xs text-muted-foreground">No spam. Only useful insights. Unsubscribe anytime.</p>
    </div>
  );
};

export default NewsletterBlock;
