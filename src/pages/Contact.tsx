import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import NewsletterBlock from "@/components/NewsletterBlock";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ArrowRight, Check } from "lucide-react";

const pathways = [
  { title: "Book Ritesh to Speak", text: "For conferences, trainings, panels, colleges, universities, media events, and communities.", href: "/speaking" },
  { title: "Work With Ritesh", text: "For consulting, strategic input, brand thinking, and founder advisory.", href: "#work-form" },
  { title: "Invite Ritesh to Your Podcast", text: "For interviews, panels, show appearances, and content collaborations.", href: "/media/invite" },
  { title: "Apply as Guest", text: "For those who want to appear on Real with Ritesh.", href: "/media/apply" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you for reaching out.");
  };

  return (
    <Layout>
      <section className="relative flex items-end min-h-[50vh] overflow-hidden">
        <div className="ambient-glow w-[400px] h-[400px] bg-primary/10 -top-20 -right-20" />
        <div className="container relative z-10 pb-16">
          <p className="section-label reveal mt-6 sm:mt-0">Contact</p>
          <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">
            Contact Ritesh <span className="text-shimmer">Watts</span>
          </h1>
          <p className="mt-4 text-gold text-sm font-medium reveal delay-2">Speaking · Consulting · Media · Opportunities</p>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl reveal delay-3">
            For speaking, consulting, media, strategic opportunities, and meaningful conversations.
          </p>
        </div>
      </section>

      <Section>
        <div className="reveal">
          <p className="section-label">Pathways</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Contact Pathways</h2>
        </div>
        <div className="mt-16 border-t border-[hsl(var(--border))]">
          {pathways.map((p, i) => (
            <div key={p.title} className={`border-b border-[hsl(var(--border))] py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 reveal delay-${Math.min(i + 1, 5)} group`}>
              <div>
                <h3 className="font-display text-lg font-semibold group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </div>
              {p.href.startsWith("#") ? (
                <a href={p.href} className="text-sm font-medium text-foreground hover:text-gold transition-colors flex items-center gap-1.5 group/link shrink-0 link-underline">
                  Go <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" />
                </a>
              ) : (
                <Link to={p.href} className="text-sm font-medium text-foreground hover:text-gold transition-colors flex items-center gap-1.5 group/link shrink-0 link-underline">
                  Go <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section id="work-form" className="bg-[hsl(var(--surface-secondary))]">
        <div className="max-w-2xl mx-auto reveal">
          <p className="section-label">Consulting</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Work With Ritesh</h2>
          <p className="mt-4 text-muted-foreground">For strategic consulting, advisory, and selective projects.</p>

          {submitted ? (
            <div className="mt-12 py-12 text-center">
              <div className="pulse-glow inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Check size={32} className="text-primary" />
              </div>
              <p className="mt-4 font-display text-xl font-semibold">Thank you for reaching out.</p>
              <p className="mt-2 text-sm text-muted-foreground">Our team will review your request and get back to you.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div><Label className="text-xs text-muted-foreground">Full Name *</Label><Input required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div><Label className="text-xs text-muted-foreground">Company / Organization</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div><Label className="text-xs text-muted-foreground">Email *</Label><Input type="email" required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
                <div><Label className="text-xs text-muted-foreground">Phone / WhatsApp</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
              </div>
              <div><Label className="text-xs text-muted-foreground">Website / LinkedIn</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
              <div><Label className="text-xs text-muted-foreground">What do you want help with? *</Label><Textarea required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] focus:border-primary transition-colors" rows={3} /></div>
              <div><Label className="text-xs text-muted-foreground">Current business / stage</Label><Textarea className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] focus:border-primary transition-colors" rows={2} /></div>
              <div><Label className="text-xs text-muted-foreground">Why do you want to work with Ritesh? *</Label><Textarea required className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] focus:border-primary transition-colors" rows={3} /></div>
              <div><Label className="text-xs text-muted-foreground">Budget / engagement level</Label><Input className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] h-12 focus:border-primary transition-colors" /></div>
              <div><Label className="text-xs text-muted-foreground">Additional notes</Label><Textarea className="mt-2 bg-[hsl(var(--surface-tertiary))] border-[hsl(var(--border))] focus:border-primary transition-colors" rows={3} /></div>
              <Button type="submit" variant="hero" size="lg" className="btn-magnetic">Submit</Button>
            </form>
          )}
        </div>
      </Section>

      <Section>
        <div className="max-w-xl mx-auto text-center reveal">
          <h2 className="font-display text-h2 font-semibold tracking-tight">Stay in the Loop</h2>
          <p className="mt-3 text-muted-foreground text-sm">Subscribe to The Ritesh Watts Letter for weekly ideas on building, moving, and growing.</p>
          <div className="mt-8">
            <NewsletterBlock compact />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
