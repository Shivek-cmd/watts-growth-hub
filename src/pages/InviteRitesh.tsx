import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Check } from "lucide-react";

const InviteRitesh = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you for the invitation.");
  };

  return (
    <Layout>
      <section className="relative flex items-end min-h-[40vh] overflow-hidden">
        <div className="container relative z-10 pb-16">
          <p className="section-label reveal">Media</p>
          <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">
            Invite Ritesh to Your <span className="text-gradient-gold">Podcast</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl reveal delay-2">
            For hosts, creators, and media teams who want Ritesh as a guest. Share details about your audience, theme, and format.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl reveal">
          <p className="section-label">Form</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Invitation Form</h2>

          {submitted ? (
            <div className="mt-12 py-12 text-center">
              <Check size={40} className="mx-auto text-primary" />
              <p className="mt-4 font-display text-xl font-semibold">Thank you for the invitation.</p>
              <p className="mt-2 text-sm text-muted-foreground">Our team will review and respond within 3–5 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div><Label className="text-xs text-muted-foreground">Host Name *</Label><Input required className="mt-2 bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))] h-12" /></div>
                <div><Label className="text-xs text-muted-foreground">Show / Platform Name *</Label><Input required className="mt-2 bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))] h-12" /></div>
                <div><Label className="text-xs text-muted-foreground">Website / Show Link</Label><Input type="url" className="mt-2 bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))] h-12" /></div>
                <div><Label className="text-xs text-muted-foreground">Email Address *</Label><Input type="email" required className="mt-2 bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))] h-12" /></div>
                <div><Label className="text-xs text-muted-foreground">Phone / WhatsApp</Label><Input className="mt-2 bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))] h-12" /></div>
                <div><Label className="text-xs text-muted-foreground">Audience Size</Label><Input type="number" className="mt-2 bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))] h-12" /></div>
              </div>
              <div><Label className="text-xs text-muted-foreground">Topic / Theme</Label><Input className="mt-2 bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))] h-12" /></div>
              <div><Label className="text-xs text-muted-foreground">Why Ritesh is a Fit</Label><Textarea className="mt-2 bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))]" rows={4} /></div>
              <div><Label className="text-xs text-muted-foreground">Proposed Recording Date</Label><Input type="date" className="mt-2 bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))] h-12" /></div>
              <div>
                <Label className="text-xs text-muted-foreground">Format</Label>
                <Select><SelectTrigger className="mt-2 bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))] h-12"><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{["Audio","Video","Livestream","Panel","Webinar","Other"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label className="text-xs text-muted-foreground">Additional Notes</Label><Textarea className="mt-2 bg-[hsl(var(--surface-secondary))] border-[hsl(var(--border))]" rows={3} /></div>
              <Button type="submit" variant="hero" size="lg">Submit Invitation</Button>
            </form>
          )}
        </div>
      </Section>
    </Layout>
  );
};

export default InviteRitesh;
