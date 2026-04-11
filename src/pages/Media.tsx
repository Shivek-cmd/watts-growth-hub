import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Play } from "lucide-react";

const topicsCovered = [
  "Entrepreneurship and Founder Lessons",
  "AI and Digital Leverage for Business",
  "Immigration and Global Mobility",
  "Content, Influence, and Personal Branding",
  "Real Estate and Wealth-Building",
  "Mindset, Decision-Making, and Long-Term Vision",
];

const Media = () => (
  <Layout>
    <section className="bg-gradient-hero">
      <div className="container py-24 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">Media & <span className="text-gradient-gold">Podcast</span></h1>
          <p className="mt-4 text-lg text-secondary font-medium">Real with Ritesh — conversations, clips, and stories for ambitious builders.</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Real with Ritesh is the media platform for practical conversations that go beyond surface-level inspiration. The show features founders, creators, operators, investors, and experts with real traction, lived experience, and ideas worth sharing across business, growth, technology, and personal evolution.
          </p>
        </div>
      </div>
    </section>

    <SectionWrapper>
      <h2 className="text-3xl font-bold md:text-4xl">About Real with Ritesh</h2>
      <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
        The podcast and media platform is designed to surface practical ideas, real stories, and useful insights that help ambitious people think better and grow better. Topics include founder mindset, AI for business, immigration and cross-border opportunity, wealth-building, and personal growth.
      </p>
    </SectionWrapper>

    <SectionWrapper className="bg-gradient-section">
      <h2 className="text-3xl font-bold md:text-4xl">Topics Covered</h2>
      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {topicsCovered.map((t) => (
          <div key={t} className="flex items-center gap-3 text-muted-foreground">
            <Check size={16} className="shrink-0 text-primary" />
            <span>{t}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <h2 className="text-3xl font-bold md:text-4xl">Two Ways to Connect</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30">
          <h3 className="text-xl font-bold">Invite Ritesh to Your Podcast</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">If Ritesh is a fit for your show, audience, or media platform, submit an invitation with the format, topic, and audience details.</p>
          <Button variant="hero" size="sm" asChild className="mt-5">
            <Link to="/media/invite">Invite Ritesh <ArrowRight size={14} className="ml-1" /></Link>
          </Button>
        </div>
        <div className="rounded-xl border border-border bg-card p-8 transition-all hover:border-secondary/30">
          <h3 className="text-xl font-bold">Apply to Be a Guest</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Founders, creators, operators, investors, and experts with valuable stories and practical insight are welcome to apply to join Real with Ritesh.</p>
          <Button variant="hero-outline" size="sm" asChild className="mt-5">
            <Link to="/media/apply">Apply as Guest <ArrowRight size={14} className="ml-1" /></Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-gradient-section">
      <h2 className="text-3xl font-bold md:text-4xl">Featured Episodes</h2>
      <p className="mt-4 text-muted-foreground">Episodes coming soon. Stay tuned for conversations with founders, operators, and experts.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <Play size={40} className="text-muted-foreground/30" />
            </div>
            <div className="p-5">
              <h3 className="font-bold">Episode Coming Soon</h3>
              <p className="mt-1 text-sm text-muted-foreground">Stay tuned for new episodes.</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </Layout>
);

export default Media;
