import { useState } from "react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Check } from "lucide-react";

const whoFor = [
  "Founders and Entrepreneurs",
  "Creators and Educators",
  "Operators and Leaders",
  "Immigration or Global Mobility Experts",
  "AI and Technology Professionals",
  "Investors and Strategic Thinkers",
  "People with lived experience and strong lessons to share",
];

const goodGuest = [
  "You have built something — a business, a brand, a project, or a career worth talking about.",
  "You have a clear point of view on your area of expertise.",
  "You can share practical frameworks, not just opinions.",
  "You are comfortable having a real, unscripted conversation.",
  "You bring value to an audience of ambitious, growth-minded people.",
];

const ApplyGuest = () => {
  const [submitted, setSubmitted] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { toast.error("Please agree to consent before submitting."); return; }
    setSubmitted(true);
    toast.success("Thank you for your application. Our team will review and respond within 5–7 business days if there is a fit.");
  };

  return (
    <Layout>
      <section className="bg-gradient-hero">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">Apply to Be a Guest on <span className="text-gradient-gold">Real with Ritesh</span></h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For founders, creators, experts, operators, and thoughtful people with practical stories and ideas worth sharing. Guests should bring clarity, depth, and relevance to the audience.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Who This Is For</h2>
            <ul className="mt-6 space-y-3">
              {whoFor.map((w) => (
                <li key={w} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-primary" /><span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">What Makes a Good Guest</h2>
            <ul className="mt-6 space-y-3">
              {goodGuest.map((g) => (
                <li key={g} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <Check size={16} className="mt-0.5 shrink-0 text-secondary" /><span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-section">
        <h2 className="text-3xl font-bold md:text-4xl">Guest Application <span className="text-gradient-gold">Form</span></h2>
        {submitted ? (
          <div className="mt-8 rounded-xl border border-primary/30 bg-card p-8 text-center glow-primary max-w-xl">
            <Check size={48} className="mx-auto text-primary" />
            <p className="mt-4 text-lg font-semibold">Thank you for your application.</p>
            <p className="mt-2 text-muted-foreground">Our team will review and respond within 5–7 business days if there is a fit.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><Label>Full Name *</Label><Input required className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Email Address *</Label><Input type="email" required className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Phone / WhatsApp</Label><Input className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Website</Label><Input type="url" className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>LinkedIn Profile</Label><Input type="url" className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Instagram / YouTube / Other Links</Label><Input className="mt-1.5 bg-muted border-border" /></div>
            </div>
            <div><Label>Short Professional Bio *</Label><Textarea required className="mt-1.5 bg-muted border-border" rows={3} /></div>
            <div><Label>Area of Expertise *</Label><Input required className="mt-1.5 bg-muted border-border" /></div>
            <div><Label>Why do you want to be on the show? *</Label><Textarea required className="mt-1.5 bg-muted border-border" rows={3} /></div>
            <div><Label>What value will the audience get from your conversation? *</Label><Textarea required className="mt-1.5 bg-muted border-border" rows={3} /></div>
            <div><Label>Three topic ideas you can discuss *</Label><Textarea required className="mt-1.5 bg-muted border-border" rows={3} /></div>
            <div><Label>Links to previous podcast appearances</Label><Input className="mt-1.5 bg-muted border-border" /></div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><Label>Audience size / reach</Label><Input className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Preferred dates or availability</Label><Input className="mt-1.5 bg-muted border-border" /></div>
            </div>
            <div><Label>Time zone</Label><Input className="mt-1.5 bg-muted border-border" /></div>
            <div className="flex items-start gap-3">
              <Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(v === true)} className="mt-0.5" />
              <Label htmlFor="consent" className="font-normal text-sm text-muted-foreground">I consent to recording and promotional use of my appearance. *</Label>
            </div>
            <Button type="submit" variant="hero" size="lg">Submit Application</Button>
          </form>
        )}
      </SectionWrapper>
    </Layout>
  );
};

export default ApplyGuest;
