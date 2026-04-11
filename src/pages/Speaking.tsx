import { useState } from "react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Check, Lightbulb, Brain, User, Globe, Settings } from "lucide-react";

const whyBook = [
  "Founder-led perspective rooted in real execution, not theory.",
  "Practical business and AI insight for modern audiences.",
  "Trusted cross-border authority through years of immigration and mobility work.",
  "Strong fit for founder communities, professional audiences, colleges, diaspora groups, and growth-focused organizations.",
  "Clear communication style built for relevance, not hype.",
  "A speaker who understands both the Indian and Canadian ecosystems — and the opportunity between them.",
];

const topics = [
  { icon: Lightbulb, title: "AI for Business Growth", text: "How founders and teams can use AI for leverage, speed, productivity, and competitive advantage. Practical frameworks you can apply immediately." },
  { icon: Brain, title: "Founder Mindset and Decision-Making", text: "How to think, decide, and operate like a modern entrepreneur in an increasingly complex and noisy world." },
  { icon: User, title: "Personal Brand as a Business Asset", text: "How content, credibility, and visibility compound into long-term opportunity and business leverage." },
  { icon: Globe, title: "India–Canada Cross-Border Opportunity", text: "Strategic insights for those navigating growth, migration, investment, or opportunity across both ecosystems." },
  { icon: Settings, title: "Building Systems That Scale", text: "How to move from hustle to structure — the systems, routines, and decisions that create sustainable growth." },
];

const formats = ["Keynotes", "Panels", "Fireside Chats", "Workshops", "Webinars", "Podcast Interviews", "Community Sessions", "Private Founder Events", "Corporate Training Sessions"];

const audiences = ["Founders and Entrepreneurs", "Business Owners and Growth Teams", "Professionals Exploring Global Opportunities", "Students and Emerging Professionals", "Creator and Media Audiences", "Diaspora Communities", "Organizations Interested in AI and Future-of-Work Thinking", "Real Estate and Investor Communities"];

const Speaking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you for your inquiry. Our team will review your request and get back to you within 2–3 business days.");
  };

  return (
    <Layout>
      <section className="bg-gradient-hero">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Book Ritesh Watts to <span className="text-gradient-gold">Speak</span></h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Practical, energizing talks on AI, founder mindset, business systems, personal brand leverage, and strategic growth for ambitious audiences.
            </p>
            <p className="mt-4 text-sm text-muted-foreground/80 leading-relaxed">
              Audiences want more than motivation. They want clarity, relevance, and real-world insight they can apply. Ritesh brings founder experience, strategic perspective, and practical frameworks that connect business, technology, mobility, and modern personal brand leverage.
            </p>
            <Button variant="hero" size="lg" asChild className="mt-8">
              <a href="#speaking-inquiry">Book Ritesh to Speak</a>
            </Button>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <h2 className="text-3xl font-bold md:text-4xl">Why Organizers Book Ritesh</h2>
        <ul className="mt-8 max-w-2xl space-y-4">
          {whyBook.map((b) => (
            <li key={b} className="flex items-start gap-3 text-muted-foreground">
              <Check size={18} className="mt-0.5 shrink-0 text-primary" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-section">
        <h2 className="text-3xl font-bold md:text-4xl">Speaking Topics</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <div key={t.title} className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <t.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-bold">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <h2 className="text-3xl font-bold md:text-4xl">Event Formats</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {formats.map((f) => (
            <Badge key={f} variant="outline" className="px-4 py-2 text-sm border-primary/30 text-foreground">{f}</Badge>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-section">
        <h2 className="text-3xl font-bold md:text-4xl">Ideal Audiences</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {audiences.map((a) => (
            <div key={a} className="flex items-center gap-3 text-muted-foreground">
              <Check size={16} className="shrink-0 text-secondary" />
              <span className="text-sm">{a}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="speaking-inquiry">
        <h2 className="text-3xl font-bold md:text-4xl">Speaking <span className="text-gradient-gold">Inquiry</span></h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">Please share a few details about the event, audience, and format so the team can review the request and respond appropriately.</p>

        {submitted ? (
          <div className="mt-8 rounded-xl border border-primary/30 bg-card p-8 text-center glow-primary">
            <Check size={48} className="mx-auto text-primary" />
            <p className="mt-4 text-lg font-semibold">Thank you for your inquiry.</p>
            <p className="mt-2 text-muted-foreground">Our team will review your request and get back to you within 2–3 business days.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><Label>Organizer Name *</Label><Input required className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Organization / Company Name</Label><Input className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Email Address *</Label><Input type="email" required className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Phone / WhatsApp</Label><Input className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Event Name</Label><Input className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Event Website</Label><Input type="url" className="mt-1.5 bg-muted border-border" /></div>
              <div>
                <Label>Event Type</Label>
                <Select><SelectTrigger className="mt-1.5 bg-muted border-border"><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{["Conference","College","Corporate","Community","Podcast","Webinar","Private Event","Other"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div><Label>Date of Event</Label><Input type="date" className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>City / Country / Virtual</Label><Input className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Audience Type</Label><Input className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Audience Size</Label><Input type="number" className="mt-1.5 bg-muted border-border" /></div>
              <div>
                <Label>Requested Speaking Format</Label>
                <Select><SelectTrigger className="mt-1.5 bg-muted border-border"><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{["Keynote","Panel","Fireside Chat","Workshop","Webinar","Podcast","Community Session","Private Event","Corporate Training"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <Label>Preferred Topic</Label>
                <Select><SelectTrigger className="mt-1.5 bg-muted border-border"><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{["AI for Business Growth","Founder Mindset and Decision-Making","Personal Brand as a Business Asset","India–Canada Cross-Border Opportunity","Building Systems That Scale","Open to Suggestions"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div>
                <Label>Budget Range</Label>
                <Select><SelectTrigger className="mt-1.5 bg-muted border-border"><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>{["Not Disclosed","Under $5,000","$5,000–$10,000","$10,000–$20,000","$20,000+","Open to Discussion"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>Travel Support Included?</Label>
              <RadioGroup defaultValue="To Be Discussed" className="mt-2 flex gap-6">
                {["Yes","No","To Be Discussed"].map(o => (
                  <div key={o} className="flex items-center gap-2">
                    <RadioGroupItem value={o} id={`travel-${o}`} />
                    <Label htmlFor={`travel-${o}`} className="font-normal">{o}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div><Label>Decision Deadline</Label><Input type="date" className="mt-1.5 bg-muted border-border" /></div>
            <div><Label>Additional Notes</Label><Textarea className="mt-1.5 bg-muted border-border" rows={4} /></div>
            <Button type="submit" variant="hero" size="lg">Submit Inquiry</Button>
          </form>
        )}
      </SectionWrapper>
    </Layout>
  );
};

export default Speaking;
