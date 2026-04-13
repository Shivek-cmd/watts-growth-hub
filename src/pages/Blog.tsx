import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import NewsletterBlock from "@/components/NewsletterBlock";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import blogAi from "@/assets/blog-ai.jpg";
import blogMigration from "@/assets/blog-migration.jpg";
import blogWealth from "@/assets/blog-wealth.jpg";
import bgAbout from "@/assets/bg-about.jpg";

const pillars = ["All", "Build", "Move", "Grow"] as const;

const samplePosts = [
  { slug: "why-ai-is-the-founders-best-leverage-tool", title: "Why AI Is the Founder's Best Leverage Tool", excerpt: "Practical ways founders can use AI to move faster, decide better, and build smarter systems.", pillar: "Build" as const, image: blogAi },
  { slug: "reverse-migration-when-going-back-becomes-going-forward", title: "Reverse Migration: When Going Back Becomes Going Forward", excerpt: "Strategic thinking about when and how to move back — and how to make it work.", pillar: "Move" as const, image: blogMigration },
  { slug: "building-wealth-through-business-not-just-savings", title: "Building Wealth Through Business, Not Just Savings", excerpt: "Why business ownership remains the most powerful wealth-building vehicle for ambitious people.", pillar: "Grow" as const, image: blogWealth },
  { slug: "the-systems-behind-every-scalable-business", title: "The Systems Behind Every Scalable Business", excerpt: "How to move from hustle to structure with repeatable, compounding systems.", pillar: "Build" as const, image: blogAi },
  { slug: "cross-border-opportunity-india-and-canada-in-2025", title: "Cross-Border Opportunity: India and Canada in 2025", excerpt: "What the corridor between India and Canada looks like for founders, investors, and professionals.", pillar: "Move" as const, image: blogMigration },
  { slug: "real-estate-as-a-wealth-pillar-for-entrepreneurs", title: "Real Estate as a Wealth Pillar for Entrepreneurs", excerpt: "How to think about real estate alongside your business for long-term optionality.", pillar: "Grow" as const, image: blogWealth },
];

const Blog = () => {
  const [active, setActive] = useState<(typeof pillars)[number]>("All");
  const filtered = active === "All" ? samplePosts : samplePosts.filter((p) => p.pillar === active);

  return (
    <Layout>
      <section className="relative flex items-end min-h-[50vh] overflow-hidden">
        <div className="parallax-bg">
          <img src={bgAbout} alt="" width={1920} height={1080} className="opacity-15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/0.7)] to-transparent" />
        <div className="ambient-glow w-[400px] h-[400px] bg-gold/5 -top-20 -right-20" />
        <div className="container relative z-10 pb-16">
          <p className="section-label reveal mt-6 sm:mt-0">Blog</p>
          <h1 className="mt-4 font-display text-h1 font-bold tracking-tight reveal delay-1">
            <span className="text-gradient-gold">Blog</span>
          </h1>
          <p className="mt-4 text-gold text-sm font-medium reveal delay-2">Build · Move · Grow</p>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed reveal delay-3">
            Actionable perspectives on building smarter businesses, moving across borders, and growing long-term wealth. Real founder lessons, practical frameworks, and ideas worth sharing.
          </p>
        </div>
      </section>

      <Section>
        <div className="reveal">
          <p className="section-label">Explore</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Explore by Pillar</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {pillars.map((p) => (
              <button
                key={p}
                onClick={() => setActive(p)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 btn-magnetic ${
                  active === p
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-[hsl(var(--border-hover))] text-muted-foreground hover:text-foreground hover:border-gold/30"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className={`reveal delay-${Math.min(i + 1, 5)} group cursor-pointer card-glow rounded-2xl p-0 overflow-hidden block`}>
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  width={640}
                  height={360}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">{post.pillar}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-tight group-hover:text-gold transition-colors duration-300">{post.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <span className="mt-4 text-sm font-medium text-foreground group-hover:text-gold transition-colors flex items-center gap-1.5 link-underline">
                  Read More <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-[hsl(var(--surface-secondary))]">
        <div className="max-w-xl mx-auto text-center reveal">
          <h2 className="font-display text-h2 font-semibold tracking-tight">Subscribe to The Ritesh Watts Letter</h2>
          <p className="mt-3 text-muted-foreground text-sm">Get weekly ideas on building, moving, and growing — straight to your inbox.</p>
          <div className="mt-8">
            <NewsletterBlock compact />
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Blog;
