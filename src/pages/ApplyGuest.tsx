import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Check } from "lucide-react";

const whoFor = ["Founders and Entrepreneurs", "Creators and Educators", "Operators and Leaders", "Immigration or Global Mobility Experts", "AI and Technology Professionals", "Investors and Strategic Thinkers", "People with lived experience and strong lessons to share"];
const goodGuest = ["You have built something — a business, a brand, a project, or a career worth talking about.", "You have a clear point of view on your area of expertise.", "You can share practical frameworks, not just opinions.", "You are comfortable having a real, unscripted conversation.", "You bring value to an audience of ambitious, growth-minded people."];

const ApplyGuest = () => {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { toast.error("Please agree to consent."); return; }
    setSubmitted(true);
    toast.success("Thank you for your application.");
  };

  return (
    <Layout>
      <section className="relative flex items-end min-h-[40vh] overflow-hidden">
        <div className="container relative z-10 pb-16">
          <p className="section-label reveal">Media</p>
          <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">
            Apply to Be a Guest on <span className="text-gradient-gold">Real with Ritesh</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl reveal delay-2">
            For founders, creators, experts, operators, and thoughtful people with practical stories and ideas worth sharing.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="reveal">
            <p className="section-label">Who</p>
            <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Who This Is For</h2>
            <ul className="mt-8 space-y-4">
              {whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />{w}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal delay-2">
            <p className="section-label">Criteria</p>
            <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">What Makes a Good Guest</h2>
            <ul className="mt-8 space-y-4">
              {goodGuest.map((g) => (
                <li key={g} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />{g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-[hsl(var(--surface-secondary))]">
        <div className="max-w-2xl reveal">
          <p className="section-label">Apply</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Guest Application Form</h2>

          {submitted ? (
            <div className="mt-12 py-12 text-center">
              <Check size={40} className="mx-auto text-primary" />
              <p className="mt-4 font-display text-xl font-semibold">Thank you for your application.</p>
              <p className="mt-2 text-sm text-muted-foreground">Our team will review and respond within 5–7 business days if there is a fit.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div><Label className="text-xs text-muted-foreground">Full Name *</Label><Input required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12" /></div>
                <div><Label className="text-xs text-muted-foreground">Email Address *</Label><Input type="email" required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12" /></div>
                <div><Label className="text-xs text-muted-foreground">Phone / WhatsApp</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12" /></div>
                <div><Label className="text-xs text-muted-foreground">Website</Label><Input type="url" className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12" /></div>
                <div><Label className="text-xs text-muted-foreground">LinkedIn Profile</Label><Input type="url" className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12" /></div>
                <div><Label className="text-xs text-muted-foreground">Social Links</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12" /></div>
              </div>
              <div><Label className="text-xs text-muted-foreground">Short Professional Bio *</Label><Textarea required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))]" rows={3} /></div>
              <div><Label className="text-xs text-muted-foreground">Area of Expertise *</Label><Input required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12" /></div>
              <div><Label className="text-xs text-muted-foreground">Why do you want to be on the show? *</Label><Textarea required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))]" rows={3} /></div>
              <div><Label className="text-xs text-muted-foreground">What value will the audience get? *</Label><Textarea required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))]" rows={3} /></div>
              <div><Label className="text-xs text-muted-foreground">Three topic ideas *</Label><Textarea required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))]" rows={3} /></div>
              <div><Label className="text-xs text-muted-foreground">Previous podcast appearances</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12" /></div>
              <div className="grid gap-6 sm:grid-cols-2">
                <div><Label className="text-xs text-muted-foreground">Audience size / reach</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12" /></div>
                <div><Label className="text-xs text-muted-foreground">Preferred dates</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12" /></div>
              </div>
              <div><Label className="text-xs text-muted-foreground">Time zone</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12" /></div>
              <div className="flex items-start gap-3">
                <Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(v === true)} className="mt-0.5" />
                <Label htmlFor="consent" className="font-normal text-sm text-muted-foreground">I consent to recording and promotional use of my appearance. *</Label>
              </div>
              <Button type="submit" variant="hero" size="lg">Submit Application</Button>
            </form>
          )}
        </div>
      </Section>
    </Layout>
  );
};

export default ApplyGuest;
