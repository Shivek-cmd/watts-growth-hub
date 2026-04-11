import { useState } from "react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
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
    toast.success("Thank you for the invitation. Our team will review and respond within 3–5 business days.");
  };

  return (
    <Layout>
      <section className="bg-gradient-hero">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Invite Ritesh to Your <span className="text-gradient-gold">Podcast</span></h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For hosts, creators, and media teams who want Ritesh as a guest on their show. Use this form to invite Ritesh to your podcast, interview, webinar, panel, or media platform.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <h2 className="text-3xl font-bold md:text-4xl">Invitation <span className="text-gradient-gold">Form</span></h2>
        {submitted ? (
          <div className="mt-8 rounded-xl border border-primary/30 bg-card p-8 text-center glow-primary max-w-xl">
            <Check size={48} className="mx-auto text-primary" />
            <p className="mt-4 text-lg font-semibold">Thank you for the invitation.</p>
            <p className="mt-2 text-muted-foreground">Our team will review and respond within 3–5 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><Label>Host Name *</Label><Input required className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Show / Platform Name *</Label><Input required className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Website / Show Link</Label><Input type="url" className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Email Address *</Label><Input type="email" required className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Phone / WhatsApp</Label><Input className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Audience Size</Label><Input type="number" className="mt-1.5 bg-muted border-border" /></div>
            </div>
            <div><Label>Topic / Theme</Label><Input className="mt-1.5 bg-muted border-border" /></div>
            <div><Label>Why Ritesh is a Fit</Label><Textarea className="mt-1.5 bg-muted border-border" rows={4} /></div>
            <div><Label>Proposed Recording Date</Label><Input type="date" className="mt-1.5 bg-muted border-border" /></div>
            <div>
              <Label>Format</Label>
              <Select><SelectTrigger className="mt-1.5 bg-muted border-border"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>{["Audio","Video","Livestream","Panel","Webinar","Other"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div><Label>Additional Notes</Label><Textarea className="mt-1.5 bg-muted border-border" rows={3} /></div>
            <Button type="submit" variant="hero" size="lg">Submit Invitation</Button>
          </form>
        )}
      </SectionWrapper>
    </Layout>
  );
};

export default InviteRitesh;
