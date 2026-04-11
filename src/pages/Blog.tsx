import { useState } from "react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import NewsletterBlock from "@/components/NewsletterBlock";
import { ArrowRight } from "lucide-react";

const pillars = ["All", "Build", "Move", "Grow"] as const;

const samplePosts = [
  { title: "Why AI Is the Founder's Best Leverage Tool", excerpt: "Practical ways founders can use AI to move faster, decide better, and build smarter systems.", pillar: "Build" as const },
  { title: "Reverse Migration: When Going Back Becomes Going Forward", excerpt: "Strategic thinking about when and how to move back — and how to make it work.", pillar: "Move" as const },
  { title: "Building Wealth Through Business, Not Just Savings", excerpt: "Why business ownership remains the most powerful wealth-building vehicle for ambitious people.", pillar: "Grow" as const },
  { title: "The Systems Behind Every Scalable Business", excerpt: "How to move from hustle to structure with repeatable, compounding systems.", pillar: "Build" as const },
  { title: "Cross-Border Opportunity: India and Canada in 2025", excerpt: "What the corridor between India and Canada looks like for founders, investors, and professionals.", pillar: "Move" as const },
  { title: "Real Estate as a Wealth Pillar for Entrepreneurs", excerpt: "How to think about real estate alongside your business for long-term optionality.", pillar: "Grow" as const },
];

const Blog = () => {
  const [active, setActive] = useState<(typeof pillars)[number]>("All");
  const filtered = active === "All" ? samplePosts : samplePosts.filter((p) => p.pillar === active);

  return (
    <Layout>
      <section className="bg-gradient-hero">
        <div className="container py-24 md:py-32">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl font-black tracking-tight md:text-6xl"><span className="text-gradient-gold">Blog</span></h1>
            <p className="mt-4 text-secondary font-medium">Actionable perspectives on building smarter businesses, moving across borders, and growing long-term wealth.</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Real founder lessons, practical frameworks, and ideas on AI, business systems, cross-border opportunity, and wealth-building — written by Ritesh and his team.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper>
        <h2 className="text-3xl font-bold md:text-4xl">Explore by Pillar</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {pillars.map((p) => (
            <Button
              key={p}
              variant={active === p ? "hero" : "outline"}
              size="sm"
              onClick={() => setActive(p)}
            >
              {p}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <div key={post.title} className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30">
              <div className="aspect-[16/9] bg-muted" />
              <div className="p-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{post.pillar}</span>
                <h3 className="mt-2 font-bold leading-tight">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <Button variant="link" className="mt-3 h-auto p-0 text-primary text-sm">
                  Read More <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="bg-gradient-section">
        <div className="mx-auto max-w-xl">
          <h2 className="text-2xl font-bold text-center">Subscribe to The Ritesh Watts Letter</h2>
          <p className="mt-3 text-center text-muted-foreground text-sm">Get weekly ideas on building, moving, and growing — straight to your inbox.</p>
          <div className="mt-6">
            <NewsletterBlock compact />
          </div>
        </div>
      </SectionWrapper>
    </Layout>
  );
};

export default Blog;
