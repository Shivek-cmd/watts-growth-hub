import { useState } from "react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import NewsletterBlock from "@/components/NewsletterBlock";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ArrowRight, Check } from "lucide-react";

const pathways = [
  { title: "Book Ritesh to Speak", text: "For conferences, trainings, panels, colleges, universities, media events, and communities.", cta: "Go to Speaking Page", href: "/speaking" },
  { title: "Work With Ritesh", text: "For consulting, strategic input, brand thinking, and founder advisory.", cta: "Fill the Form Below", href: "#work-form" },
  { title: "Invite Ritesh to Your Podcast", text: "For interviews, panels, show appearances, and content collaborations.", cta: "Invite Ritesh", href: "/media/invite" },
  { title: "Apply as Guest", text: "For those who want to appear on Real with Ritesh.", cta: "Apply as Guest", href: "/media/apply" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you for reaching out. Our team will review your request and get back to you.");
  };

  return (
    <Layout>
      <section className="bg-gradient-hero">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Contact Ritesh <span className="text-gradient-gold">Watts</span></h1>
            <p className="mt-6 text-lg text-muted-foreground">For speaking, consulting, media, strategic opportunities, and meaningful conversations.</p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <h2 className="text-3xl font-bold md:text-4xl">Contact Pathways</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {pathways.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
              {p.href.startsWith("#") ? (
                <Button variant="link" asChild className="mt-4 h-auto p-0 text-primary text-sm">
                  <a href={p.href}>{p.cta} <ArrowRight size={14} className="ml-1" /></a>
                </Button>
              ) : (
                <Button variant="link" asChild className="mt-4 h-auto p-0 text-primary text-sm">
                  <Link to={p.href}>{p.cta} <ArrowRight size={14} className="ml-1" /></Link>
                </Button>
              )}
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="work-form" className="bg-gradient-section">
        <h2 className="text-3xl font-bold md:text-4xl">Work With <span className="text-gradient-gold">Ritesh</span></h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">For strategic consulting, advisory, and selective projects. Please share a few details so the team can review your request.</p>

        {submitted ? (
          <div className="mt-8 rounded-xl border border-primary/30 bg-card p-8 text-center glow-primary max-w-xl">
            <Check size={48} className="mx-auto text-primary" />
            <p className="mt-4 text-lg font-semibold">Thank you for reaching out.</p>
            <p className="mt-2 text-muted-foreground">Our team will review your request and get back to you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><Label>Full Name *</Label><Input required className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Company / Organization</Label><Input className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Email *</Label><Input type="email" required className="mt-1.5 bg-muted border-border" /></div>
              <div><Label>Phone / WhatsApp</Label><Input className="mt-1.5 bg-muted border-border" /></div>
            </div>
            <div><Label>Website / LinkedIn</Label><Input className="mt-1.5 bg-muted border-border" /></div>
            <div><Label>What do you want help with? *</Label><Textarea required className="mt-1.5 bg-muted border-border" rows={3} /></div>
            <div><Label>Current business / stage</Label><Textarea className="mt-1.5 bg-muted border-border" rows={2} /></div>
            <div><Label>Why do you want to work with Ritesh? *</Label><Textarea required className="mt-1.5 bg-muted border-border" rows={3} /></div>
            <div><Label>Budget / engagement level</Label><Input className="mt-1.5 bg-muted border-border" /></div>
            <div><Label>Additional notes</Label><Textarea className="mt-1.5 bg-muted border-border" rows={3} /></div>
            <Button type="submit" variant="hero" size="lg">Submit</Button>
          </form>
        )}
      </SectionWrapper>

      <SectionWrapper>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold">Stay in the Loop</h2>
          <p className="mt-3 text-muted-foreground text-sm">Subscribe to The Ritesh Watts Letter for weekly ideas on building, moving, and growing.</p>
          <div className="mt-6">
            <NewsletterBlock compact />
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Contact;
