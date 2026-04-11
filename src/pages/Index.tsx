import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import NewsletterBlock from "@/components/NewsletterBlock";
import Card3D from "@/components/Card3D";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-ritesh.jpg";
import bgAbout from "@/assets/bg-about.jpg";
import speakingImg from "@/assets/speaking-stage.jpg";
import podcastImg from "@/assets/media-podcast.jpg";
import blogAi from "@/assets/blog-ai.jpg";
import blogMigration from "@/assets/blog-migration.jpg";
import blogWealth from "@/assets/blog-wealth.jpg";

const blogPosts = [
  { title: "Why AI Is the Founder's Best Leverage Tool", excerpt: "Practical ways founders can use AI to move faster, decide better, and build smarter systems.", pillar: "Build", image: blogAi },
  { title: "Reverse Migration: When Going Back Becomes Going Forward", excerpt: "Strategic thinking about when and how to move back — and how to make it work.", pillar: "Move", image: blogMigration },
  { title: "Building Wealth Through Business, Not Just Savings", excerpt: "Why business ownership remains the most powerful wealth-building vehicle for ambitious people.", pillar: "Grow", image: blogWealth },
];

const Index = () => (
  <Layout>
    {/* ============ HERO ============ */}
    <section className="snap-section relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Hero image — full bleed on right, blending into background */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[55%]" style={{ animation: "img-scale-in 1.4s var(--ease-out) both" }}>
        <img src={heroImg} alt="Ritesh Watts — Author, Entrepreneur, Investor, and Speaker" width={960} height={1080} className="w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] via-[hsl(var(--background)/0.35)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-transparent opacity-40" />
      </div>

      <div className="ambient-glow w-[600px] h-[600px] bg-primary/10 -top-40 -left-40" />

      <div className="hero-rings">
        <svg width="800" height="800" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="200" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="400" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="particle-bg">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="dot" style={{
            left: `${10 + Math.random() * 80}%`, top: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 0.8}s`, animationDuration: `${8 + Math.random() * 6}s`,
            ['--tx' as string]: `${(Math.random() - 0.5) * 80}px`,
            ['--ty' as string]: `${-30 - Math.random() * 60}px`,
          }} />
        ))}
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          <p className="section-label reveal">Author <span className="dot-blink">·</span> Entrepreneur <span className="dot-blink">·</span> Investor <span className="dot-blink">·</span> Speaker</p>
          <h1 className="mt-6 font-display text-hero font-bold tracking-tight leading-[1.05] reveal delay-1">
            Ritesh{" "}<span className="text-shimmer">Watts</span>
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground max-w-2xl reveal delay-2" style={{ maxWidth: "72ch" }}>
            Helping ambitious people build smarter businesses, move across borders strategically, and grow long-term wealth.
          </p>
          <p className="mt-4 text-sm text-muted-foreground/70 max-w-xl reveal delay-3">
            Through business, AI, migration insight, media, and founder-led thinking — practical ideas, real stories, and strategic frameworks for people who grow with intention.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4 reveal delay-4">
            <Button variant="hero" size="lg" asChild className="btn-magnetic">
              <Link to="/speaking">Book Ritesh to Speak</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild className="btn-magnetic">
              <Link to="/contact">Work With Ritesh</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 reveal delay-5">
            {[
              { label: "Explore Media", href: "/media" },
              { label: "Read the Blog", href: "/blog" },
              { label: "Subscribe to Newsletter", href: "/#newsletter" },
            ].map((link) => (
              <Link key={link.label} to={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 group link-underline">
                {link.label}
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ============ BUILD · MOVE · GROW ============ */}
    <section className="snap-section relative overflow-hidden bg-[hsl(var(--surface-secondary))]" style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)" }} />
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="section-label">Three Pillars</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Build · Move · Grow</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed mx-auto" style={{ maxWidth: "72ch" }}>
            Ritesh's work sits across three connected domains. Whether you are building a smarter business, moving across borders with purpose, or growing long-term wealth — there is a framework, a story, and a system that can help.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { title: "Build", num: "01", text: "Founder mindset, systems, decisions, and AI leverage to build smarter businesses and stronger positioning." },
            { title: "Move", num: "02", text: "Career choices, migration, reverse migration, and cross-border opportunities across India, Canada, and beyond." },
            { title: "Grow", num: "03", text: "Wealth-building through business, real estate, and personal growth for long-term freedom and optionality." },
          ].map((p, i) => (
            <Card3D key={p.title} className={`reveal delay-${i + 1} scroll-tilt group relative overflow-hidden h-full`}>
              {/* Large background number */}
              <div className="absolute -top-6 -right-2 font-display text-[8rem] font-bold leading-none text-foreground/[0.03] group-hover:text-gold/[0.08] transition-colors duration-700 select-none pointer-events-none">
                {p.num}
              </div>
              <div className="relative z-10 h-full p-8 md:p-10 border border-[hsl(var(--border))] bg-[hsl(var(--background))] rounded-[inherit]">
                <div className="h-px w-12 bg-gold/60 group-hover:w-20 transition-all duration-500 mb-6" />
                <h3 className="font-display text-3xl font-bold tracking-tight">
                  <span className="text-gradient-gold">{p.title}</span>
                </h3>
                <p className="mt-5 text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>

    {/* ============ WHAT RITESH DOES ============ */}
    <Section className="bg-[hsl(var(--surface-secondary))]">
      <div className="max-w-2xl reveal-left">
        <p className="section-label">Impact Areas</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">What Ritesh Does</h2>
        <p className="mt-4 text-muted-foreground">Four connected areas of impact — all rooted in one founder-led vision.</p>
      </div>
      <div className="mt-16 grid gap-px bg-[hsl(var(--border))] md:grid-cols-2 rounded-lg overflow-hidden">
        {[
          { title: "Work With Ritesh", text: "Strategic consulting for founders and leaders — business direction, positioning, personal brand strategy, and systems that create leverage.", cta: "Work With Ritesh", href: "/contact" },
          { title: "Speaking", text: "Keynotes, panels, fireside chats, and conversations on AI, founder mindset, personal branding, and cross-border opportunity.", cta: "Book Ritesh to Speak", href: "/speaking" },
          { title: "Media & Podcast", text: "Real with Ritesh — a podcast and media platform featuring founders, operators, creators, investors, and experts with traction and stories worth sharing.", cta: "Explore Media", href: "/media" },
          { title: "Investing", text: "Ritesh invests in founders and businesses where he can add strategic value — through systems, AI, brand, and cross-border insight.", cta: "Reach Out", href: "/contact" },
        ].map((item, i) => (
          <div key={item.title} className={`card-glow bg-[hsl(var(--surface-secondary))] p-10 md:p-12 reveal delay-${i + 1} group`}>
            <h3 className="font-display text-xl font-semibold group-hover:text-gold transition-colors duration-300">{item.title}</h3>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            <div className="card-reveal-content">
              <Link to={item.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-gold transition-colors group/link link-underline">
                {item.cta}
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-0.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* ============ ABOUT PREVIEW — Parallax Background ============ */}
    <section className="snap-section relative overflow-hidden" style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="parallax-bg">
        <img src={bgAbout} alt="" loading="lazy" width={1920} height={1080} className="opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-transparent to-[hsl(var(--background))]" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center reveal-scale">
          <p className="section-label">About</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Meet Ritesh</h2>
          <p className="mt-8 font-display text-xl md:text-2xl font-normal leading-relaxed text-foreground/90" style={{ maxWidth: "72ch", margin: "2rem auto 0" }}>
            An Indian-Canadian Author, Entrepreneur, Investor, and Speaker operating at the intersection of{" "}
            <em className="text-gold not-italic">business growth</em>, AI leverage, cross-border opportunity, and long-term wealth creation.
          </p>
          <Button variant="hero-outline" size="lg" asChild className="mt-10 btn-magnetic">
            <Link to="/about">Read the Story <ArrowRight size={15} className="ml-1.5" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ============ SPEAKING PREVIEW — Left-aligned with bleed image ============ */}
    <section className="relative overflow-hidden" style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="hidden md:block absolute inset-y-0 right-0 w-[45%]">
        <img src={speakingImg} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--background))] via-[hsl(var(--background)/0.4)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-transparent to-[hsl(var(--background)/0.3)]" />
      </div>
      <div className="container relative z-10">
        <div className="max-w-xl reveal-left">
          <p className="section-label">Speaking</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Book Ritesh to Speak</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Ritesh speaks on AI for business, founder mindset and decision-making, personal branding and business systems, and India–Canada cross-border opportunity. His sessions are practical, rooted in real execution, and designed to leave audiences with frameworks they can apply immediately.
          </p>
          <Button variant="hero" size="lg" asChild className="mt-8 btn-magnetic">
            <Link to="/speaking">View Speaking Topics <ArrowRight size={15} className="ml-1.5" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* ============ MEDIA PREVIEW — Contrast section ============ */}
    <section className="relative overflow-hidden bg-[hsl(var(--surface-secondary))]" style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)" }} />
      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="reveal-left">
            <p className="section-label">Podcast & Media</p>
            <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Real with Ritesh</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Conversations, clips, and stories at the intersection of business, opportunity, growth, and modern founder life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild className="btn-magnetic">
                <Link to="/media">Watch / Listen</Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="btn-magnetic">
                <Link to="/media/invite">Invite Ritesh</Link>
              </Button>
            </div>
          </div>
          <div className="reveal-right delay-2">
            <div className="relative rounded-2xl overflow-hidden aspect-video">
              <img src={podcastImg} alt="Real with Ritesh podcast" loading="lazy" width={640} height={360} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background)/0.5)] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ============ BLOG PREVIEW ============ */}
    <Section className="bg-[hsl(var(--surface-secondary))]">
      <div className="text-center max-w-3xl mx-auto reveal">
        <p className="section-label">Blog</p>
        <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Read the Blog</h2>
        <p className="mt-4 text-muted-foreground">Actionable perspectives on building smarter businesses, moving across borders, and growing long-term wealth.</p>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, i) => (
          <Link key={post.title} to="/blog" className={`group reveal delay-${i + 1} block`}>
            <div className="blog-card-img aspect-[16/9]">
              <img src={post.image} alt={post.title} loading="lazy" width={640} height={360} className="w-full h-full object-cover" />
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-gold">{post.pillar}</p>
            <h3 className="mt-2 font-display text-lg font-semibold leading-tight group-hover:text-gold transition-colors duration-300">{post.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-gold transition-colors">
              Read More <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center reveal delay-4">
        <Button variant="hero" size="lg" asChild className="btn-magnetic">
          <Link to="/blog">Go to the Blog <ArrowRight size={15} className="ml-1.5" /></Link>
        </Button>
      </div>
    </Section>

    {/* ============ NEWSLETTER ============ */}
    <Section id="newsletter">
      <div className="max-w-2xl mx-auto reveal-scale">
        <NewsletterBlock />
      </div>
    </Section>

    {/* ============ FINAL CONNECTION — Parallax ============ */}
    <section className="relative overflow-hidden" style={{ paddingTop: "var(--section-py)", paddingBottom: "var(--section-py)" }}>
      <div className="parallax-bg parallax-slow">
        <img src={bgAbout} alt="" loading="lazy" width={1920} height={1080} className="opacity-10" />
      </div>
      <div className="absolute inset-0 bg-primary/[0.06]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,0.08) 60px, rgba(255,255,255,0.08) 61px)" }} />
      <div className="container relative z-10">
        <h2 className="font-display text-h2 font-semibold tracking-tight text-center reveal">Choose Your Next Step</h2>
        <div className="mt-16 grid gap-px bg-[hsl(var(--border))] sm:grid-cols-2 lg:grid-cols-4 rounded-lg overflow-hidden">
          {[
            { title: "Work With Ritesh", text: "Strategic consulting for founders and leaders.", cta: "Work With Ritesh", href: "/contact" },
            { title: "Book Ritesh to Speak", text: "Keynotes, panels, and founder conversations.", cta: "Book to Speak", href: "/speaking" },
            { title: "Explore Media", text: "Real with Ritesh — conversations and clips.", cta: "Explore Media", href: "/media" },
            { title: "Read the Blog", text: "Weekly ideas and frameworks.", cta: "Read the Blog", href: "/blog" },
          ].map((card, i) => (
            <div key={card.title} className={`bg-background p-8 text-center reveal delay-${i + 1} group`}>
              <h3 className="font-display text-lg font-semibold group-hover:text-gold transition-colors duration-300">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{card.text}</p>
              <Button variant="hero" size="sm" asChild className="mt-6 btn-magnetic">
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
