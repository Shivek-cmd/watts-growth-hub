import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Check } from "lucide-react";
import speakingImg from "@/assets/speaking-stage.jpg";

const whyBook = [
  "Founder-led perspective rooted in real execution, not theory.",
  "Practical business and AI insight for modern audiences.",
  "Trusted cross-border authority through years of immigration and mobility work.",
  "Strong fit for founder communities, professional audiences, colleges, diaspora groups, and growth-focused organizations.",
  "Clear communication style built for relevance, not hype.",
  "A speaker who understands both the Indian and Canadian ecosystems — and the opportunity between them.",
];

const topics = [
  { title: "AI for Business Growth", text: "How founders and teams can use AI for leverage, speed, productivity, and competitive advantage." },
  { title: "Founder Mindset and Decision-Making", text: "How to think, decide, and operate like a modern entrepreneur in an increasingly complex and noisy world." },
  { title: "Personal Brand as a Business Asset", text: "How content, credibility, and visibility compound into long-term opportunity and business leverage." },
  { title: "India–Canada Cross-Border Opportunity", text: "Strategic insights for those navigating growth, migration, investment, or opportunity across both ecosystems." },
  { title: "Building Systems That Scale", text: "How to move from hustle to structure — the systems, routines, and decisions that create sustainable growth." },
];

const formats = ["Keynotes", "Panels", "Fireside Chats", "Workshops", "Webinars", "Podcast Interviews", "Community Sessions", "Private Founder Events", "Corporate Training Sessions"];
const audiences = ["Founders and Entrepreneurs", "Business Owners and Growth Teams", "Professionals Exploring Global Opportunities", "Students and Emerging Professionals", "Creator and Media Audiences", "Diaspora Communities", "Organizations Interested in AI and Future-of-Work Thinking", "Real Estate and Investor Communities"];

const Speaking = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you for your inquiry.");
  };

  return (
    <Layout>
      {/* Hero with parallax */}
      <section className="relative flex items-end min-h-[50vh] overflow-hidden">
        <div className="parallax-bg">
          <img src={speakingImg} alt="" width={1920} height={1080} className="opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/0.6)] to-[hsl(var(--background)/0.3)]" />
        <div className="ambient-glow w-[500px] h-[500px] bg-primary/10 -top-20 -right-20" />
        <div className="container relative z-10 pb-16">
          <p className="section-label reveal">Speaking</p>
          <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">
            Book Ritesh Watts to <span className="text-shimmer">Speak</span>
          </h1>
          <p className="mt-4 text-gold text-sm font-medium reveal delay-2">Keynotes · Panels · Fireside Chats · Workshops</p>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl reveal delay-3">
            Practical, energizing talks on AI, founder mindset, business systems, personal brand leverage, and strategic growth for ambitious audiences.
          </p>
          <Button variant="hero" size="lg" asChild className="mt-8 reveal delay-4 btn-magnetic">
            <a href="#speaking-inquiry">Book Ritesh to Speak</a>
          </Button>
        </div>
      </section>

      <Section>
        <div className="max-w-2xl reveal-left">
          <p className="section-label">Why Ritesh</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Why Organizers Book Ritesh</h2>
          <ul className="mt-10 space-y-5 stagger-list reveal">
            {whyBook.map((b, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                <span className="text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Topics */}
      <Section className="bg-[hsl(var(--surface-secondary))]">
        <div className="reveal">
          <p className="section-label">Topics</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Speaking Topics</h2>
        </div>
        <div className="mt-16 space-y-0 border-t border-[hsl(var(--border))]">
          {topics.map((t, i) => (
            <div key={t.title} className={`card-glow border-b border-[hsl(var(--border))] p-8 md:p-10 reveal delay-${Math.min(i + 1, 5)} group`}>
              <h3 className="font-display text-xl font-semibold group-hover:text-gold transition-colors duration-300">{t.title}</h3>
              <div className="card-reveal-content">
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="reveal-left">
            <p className="section-label">Formats</p>
            <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Event Formats</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {formats.map((f) => (
                <span key={f} className="card-glow rounded-full px-5 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-all duration-300 cursor-default">{f}</span>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <p className="section-label">Audiences</p>
            <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Ideal Audiences</h2>
            <ul className="mt-8 space-y-3 stagger-list reveal">
              {audiences.map((a) => (
                <li key={a} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Inquiry Form */}
      <Section id="speaking-inquiry" className="bg-[hsl(var(--surface-secondary))]">
        <div className="max-w-2xl mx-auto reveal">
          <p className="section-label">Inquiry</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Speaking Inquiry</h2>
          <p className="mt-4 text-muted-foreground">Share details about the event so the team can review and respond.</p>

          {submitted ? (
            <div className="mt-12 py-12 text-center reveal-scale visible">
              <div className="pulse-glow inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Check size={32} className="text-primary" />
              </div>
              <p className="mt-4 font-display text-xl font-semibold">Thank you for your inquiry.</p>
              <p className="mt-2 text-sm text-muted-foreground">Our team will get back to you within 2–3 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div><Label className="text-xs text-muted-foreground">Organizer Name *</Label><Input required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div><Label className="text-xs text-muted-foreground">Organization</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div><Label className="text-xs text-muted-foreground">Email Address *</Label><Input type="email" required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div><Label className="text-xs text-muted-foreground">Phone / WhatsApp</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div><Label className="text-xs text-muted-foreground">Event Name</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div><Label className="text-xs text-muted-foreground">Event Website</Label><Input type="url" className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div>
                  <Label className="text-xs text-muted-foreground">Event Type</Label>
                  <Select><SelectTrigger className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>{["Conference","College","Corporate","Community","Podcast","Webinar","Private Event","Other"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div><Label className="text-xs text-muted-foreground">Date of Event</Label><Input type="date" className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div><Label className="text-xs text-muted-foreground">City / Country / Virtual</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div><Label className="text-xs text-muted-foreground">Audience Size</Label><Input type="number" className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div>
                  <Label className="text-xs text-muted-foreground">Speaking Format</Label>
                  <Select><SelectTrigger className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>{["Keynote","Panel","Fireside Chat","Workshop","Webinar","Podcast","Community Session","Private Event","Corporate Training"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Preferred Topic</Label>
                  <Select><SelectTrigger className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>{["AI for Business Growth","Founder Mindset and Decision-Making","Personal Brand as a Business Asset","India–Canada Cross-Border Opportunity","Building Systems That Scale","Open to Suggestions"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-xs text-muted-foreground">Budget Range</Label>
                  <Select><SelectTrigger className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12"><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>{["Not Disclosed","Under $5,000","$5,000–$10,000","$10,000–$20,000","$20,000+","Open to Discussion"].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="text-xs text-muted-foreground">Travel Support Included?</Label>
                <RadioGroup defaultValue="To Be Discussed" className="mt-3 flex gap-6">
                  {["Yes","No","To Be Discussed"].map(o => (
                    <div key={o} className="flex items-center gap-2">
                      <RadioGroupItem value={o} id={`travel-${o}`} />
                      <Label htmlFor={`travel-${o}`} className="font-normal text-sm text-muted-foreground">{o}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              <div><Label className="text-xs text-muted-foreground">Decision Deadline</Label><Input type="date" className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
              <div><Label className="text-xs text-muted-foreground">Additional Notes</Label><Textarea className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] focus:border-primary transition-colors" rows={4} /></div>
              <Button type="submit" variant="hero" size="lg" className="btn-magnetic">Submit Inquiry</Button>
            </form>
          )}
        </div>
      </Section>
    </Layout>
  );
};

export default Speaking;
