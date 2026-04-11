import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import NewsletterBlock from "@/components/NewsletterBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => (
  <Layout>
    {/* ============ HERO ============ */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Ambient glow */}
      <div className="ambient-glow w-[600px] h-[600px] bg-primary/10 -top-40 -left-40" />
      <div className="ambient-glow w-[400px] h-[400px] bg-gold/5 bottom-0 right-0" />

      {/* Rings */}
      <div className="hero-rings">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="400" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <p className="section-label reveal">Author · Entrepreneur · Investor · Speaker</p>

          <h1 className="mt-6 font-display text-hero font-bold tracking-tight leading-[1.05] reveal delay-1">
            Ritesh{" "}
            <span className="text-shimmer">Watts</span>
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-2xl reveal delay-2" style={{ maxWidth: "72ch" }}>
            Helping ambitious people build smarter businesses, move across borders strategically, and grow long-term wealth.
          </p>

          <p className="mt-4 text-sm text-muted-foreground/70 max-w-xl reveal delay-3">
            Through business, AI, migration insight, media, and founder-led thinking — practical ideas, real stories, and strategic frameworks for people who grow with intention.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 reveal delay-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/speaking">Book Ritesh to Speak</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Work With Ritesh</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 reveal delay-5">
            {[
              { label: "Explore Media", href: "/media" },
              { label: "Read the Blog", href: "/blog" },
              { label: "Subscribe to Newsletter", href: "/#newsletter" },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group"
              >
                {link.label}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ============ BUILD · MOVE · GROW — Text Island ============ */}
    <Section>
      <div className="max-w-3xl reveal">
        <p className="section-label">Three Pillars</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">
          Build · Move · Grow
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed" style={{ maxWidth: "72ch" }}>
          Ritesh's work sits across three connected domains. Whether you are building a smarter business, moving across borders with purpose, or growing long-term wealth — there is a framework, a story, and a system that can help.
        </p>
      </div>

      <div className="mt-16 grid gap-16 md:grid-cols-3">
        {[
          { title: "Build", text: "Founder mindset, systems, decisions, and AI leverage to build smarter businesses and stronger positioning." },
          { title: "Move", text: "Career choices, migration, reverse migration, and cross-border opportunities across India, Canada, and beyond." },
          { title: "Grow", text: "Wealth-building through business, real estate, and personal growth for long-term freedom and optionality." },
        ].map((p, i) => (
          <div key={p.title} className={`reveal delay-${i + 1}`}>
            <h3 className="font-display text-2xl font-semibold text-gradient-gold">{p.title}</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* ============ WHAT RITESH DOES ============ */}
    <Section className="bg-[hsl(var(--surface-secondary))]">
      <div className="max-w-2xl reveal">
        <p className="section-label">Impact Areas</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">
          What Ritesh Does
        </h2>
        <p className="mt-4 text-muted-foreground">
          Four connected areas of impact — all rooted in one founder-led vision.
        </p>
      </div>

      <div className="mt-16 grid gap-px bg-[hsl(var(--border))] md:grid-cols-2 rounded-lg overflow-hidden">
        {[
          { title: "Work With Ritesh", text: "Strategic consulting for founders and leaders — business direction, positioning, personal brand strategy, and systems that create leverage.", cta: "Work With Ritesh", href: "/contact" },
          { title: "Speaking", text: "Keynotes, panels, fireside chats, and conversations on AI, founder mindset, personal branding, and cross-border opportunity.", cta: "Book Ritesh to Speak", href: "/speaking" },
          { title: "Media & Podcast", text: "Real with Ritesh — a podcast and media platform featuring founders, operators, creators, investors, and experts with traction and stories worth sharing.", cta: "Explore Media", href: "/media" },
          { title: "Investing", text: "Ritesh invests in founders and businesses where he can add strategic value — through systems, AI, brand, and cross-border insight.", cta: "Reach Out", href: "/contact" },
        ].map((item, i) => (
          <div key={item.title} className={`bg-[hsl(var(--surface-secondary))] p-10 md:p-12 reveal delay-${i + 1}`}>
            <h3 className="font-display text-xl font-semibold">{item.title}</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            <Link
              to={item.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-gold transition-colors group"
            >
              {item.cta}
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </Section>

    {/* ============ ABOUT PREVIEW — Text Island ============ */}
    <Section>
      <div className="max-w-3xl mx-auto text-center reveal">
        <p className="section-label">About</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">
          Meet Ritesh
        </h2>
        <p className="mt-8 font-display text-xl md:text-2xl font-normal leading-relaxed text-foreground/90" style={{ maxWidth: "72ch", margin: "2rem auto 0" }}>
          An Indian-Canadian Author, Entrepreneur, Investor, and Speaker operating at the intersection of{" "}
          <em className="text-gold not-italic">business growth</em>, AI leverage, cross-border opportunity, and long-term wealth creation.
        </p>
        <Button variant="hero-outline" size="lg" asChild className="mt-10">
          <Link to="/about">Read the Story <ArrowRight size={15} className="ml-1.5" /></Link>
        </Button>
      </div>
    </Section>

    {/* ============ SPEAKING PREVIEW ============ */}
    <Section className="bg-[hsl(var(--surface-secondary))]">
      <div className="max-w-3xl reveal">
        <p className="section-label">Speaking</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">
          Book Ritesh to Speak
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed" style={{ maxWidth: "72ch" }}>
          Ritesh speaks on AI for business, founder mindset and decision-making, personal branding and business systems, and India–Canada cross-border opportunity. His sessions are practical, rooted in real execution, and designed to leave audiences with frameworks they can apply immediately.
        </p>
        <Button variant="hero" size="lg" asChild className="mt-8">
          <Link to="/speaking">View Speaking Topics <ArrowRight size={15} className="ml-1.5" /></Link>
        </Button>
      </div>
    </Section>

    {/* ============ MEDIA PREVIEW ============ */}
    <Section>
      <div className="max-w-3xl mx-auto text-center reveal">
        <p className="section-label">Podcast & Media</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">
          Real with Ritesh
        </h2>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Conversations, clips, and stories at the intersection of business, opportunity, growth, and modern founder life.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/media">Watch / Listen</Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/media/invite">Invite Ritesh to Your Podcast</Link>
          </Button>
        </div>
      </div>
    </Section>

    {/* ============ BLOG PREVIEW ============ */}
    <Section className="bg-[hsl(var(--surface-secondary))]">
      <div className="max-w-3xl reveal">
        <p className="section-label">Blog</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">
          Read the Blog
        </h2>
        <p className="mt-2 text-sm text-gold">
          Actionable perspectives on building smarter businesses, moving across borders, and growing long-term wealth.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed" style={{ maxWidth: "72ch" }}>
          Real founder lessons, practical frameworks, and ideas on AI, business systems, cross-border opportunity, and wealth-building — written by Ritesh and his team.
        </p>
        <Button variant="hero" size="lg" asChild className="mt-8">
          <Link to="/blog">Go to the Blog <ArrowRight size={15} className="ml-1.5" /></Link>
        </Button>
      </div>
    </Section>

    {/* ============ NEWSLETTER ============ */}
    <Section id="newsletter">
      <div className="max-w-2xl reveal">
        <NewsletterBlock />
      </div>
    </Section>

    {/* ============ FINAL CONNECTION — The ONE dramatic moment ============ */}
    <section className="relative overflow-hidden" style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      {/* Full-bleed contrast */}
      <div className="absolute inset-0 bg-primary/[0.06]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)",
        }}
      />

      <div className="container relative z-10">
        <h2 className="font-display text-h2 font-semibold tracking-tight text-center reveal">
          Choose Your Next Step
        </h2>

        <div className="mt-16 grid gap-px bg-[hsl(var(--border))] sm:grid-cols-2 lg:grid-cols-4 rounded-lg overflow-hidden">
          {[
            { title: "Work With Ritesh", text: "Strategic consulting for founders and leaders.", cta: "Work With Ritesh", href: "/contact" },
            { title: "Book Ritesh to Speak", text: "Keynotes, panels, and founder conversations.", cta: "Book to Speak", href: "/speaking" },
            { title: "Explore Media", text: "Real with Ritesh — conversations and clips.", cta: "Explore Media", href: "/media" },
            { title: "Read the Blog", text: "Weekly ideas and frameworks.", cta: "Read the Blog", href: "/blog" },
          ].map((card, i) => (
            <div key={card.title} className={`bg-background p-8 text-center reveal delay-${i + 1}`}>
              <h3 className="font-display text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{card.text}</p>
              <Button variant="hero" size="sm" asChild className="mt-6">
                <Link to={card.href}>{card.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
