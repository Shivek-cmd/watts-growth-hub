import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import NewsletterBlock from "@/components/NewsletterBlock";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Globe, TrendingUp, Briefcase, Mic, Radio, DollarSign } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    title: "Build",
    text: "Founder mindset, systems, decisions, and AI leverage to build smarter businesses and stronger positioning.",
  },
  {
    icon: Globe,
    title: "Move",
    text: "Career choices, migration, reverse migration, and cross-border opportunities across India, Canada, and beyond.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    text: "Wealth-building through business, real estate, and personal growth for long-term freedom and optionality.",
  },
];

const whatRiteshDoes = [
  {
    icon: Briefcase,
    title: "Work With Ritesh",
    text: "Strategic consulting for founders and leaders — business direction, positioning, personal brand strategy, and systems that create leverage.",
    cta: "Work With Ritesh",
    href: "/contact",
  },
  {
    icon: Mic,
    title: "Speaking",
    text: "Keynotes, panels, fireside chats, and conversations on AI, founder mindset, personal branding, and cross-border opportunity.",
    cta: "Book Ritesh to Speak",
    href: "/speaking",
  },
  {
    icon: Radio,
    title: "Media & Podcast",
    text: "Real with Ritesh — a podcast and media platform featuring founders, operators, creators, investors, and experts with traction and stories worth sharing.",
    cta: "Explore Media & Podcast",
    href: "/media",
  },
  {
    icon: DollarSign,
    title: "Investing",
    text: "Ritesh invests in founders and businesses where he can add strategic value — through systems, AI, brand, and cross-border insight.",
    cta: "Reach Out",
    href: "/contact",
  },
];

const finalCards = [
  { title: "Work With Ritesh", text: "Strategic consulting for founders and leaders.", cta: "Work With Ritesh", href: "/contact" },
  { title: "Book Ritesh to Speak", text: "Keynotes, panels, and founder conversations.", cta: "Book Ritesh to Speak", href: "/speaking" },
  { title: "Explore Media & Podcast", text: "Real with Ritesh — conversations and clips.", cta: "Explore Media & Podcast", href: "/media" },
  { title: "Read the Blog", text: "Weekly ideas and frameworks.", cta: "Read the Blog", href: "/blog" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-gradient-hero">
      <div className="container flex min-h-[85vh] flex-col justify-center py-20">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Author · Entrepreneur · Investor · Speaker
          </p>
          <h1 className="mt-4 text-5xl font-black leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
            Ritesh <span className="text-gradient-gold">Watts</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Author, Entrepreneur, Investor, and Speaker helping ambitious people build smarter businesses, move across borders strategically, and grow long-term wealth.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground/80">
            Through business, AI, migration insight, media, and founder-led thinking, Ritesh shares practical ideas, real stories, and strategic frameworks for people who want to grow with intention — not random hustle.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/speaking">Book Ritesh to Speak</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Work With Ritesh</Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link to="/media" className="text-muted-foreground transition-colors hover:text-primary flex items-center gap-1">
              Explore Media & Podcast <ArrowRight size={14} />
            </Link>
            <Link to="/blog" className="text-muted-foreground transition-colors hover:text-primary flex items-center gap-1">
              Read the Blog <ArrowRight size={14} />
            </Link>
            <a href="#newsletter" className="text-muted-foreground transition-colors hover:text-secondary flex items-center gap-1">
              Subscribe to The Ritesh Watts Letter <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Build · Move · Grow */}
    <SectionWrapper className="bg-gradient-section">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Build · Move · <span className="text-gradient-gold">Grow</span>
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Ritesh's work sits across three connected domains. Whether you are building a smarter business, moving across borders with purpose, or growing long-term wealth — there is a framework, a story, and a system that can help.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:glow-primary">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <p.icon size={24} />
            </div>
            <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* What Ritesh Does */}
    <SectionWrapper>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">What Ritesh Does</h2>
        <p className="mt-3 text-muted-foreground">Four connected areas of impact — all rooted in one founder-led vision.</p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {whatRiteshDoes.map((item) => (
          <div key={item.title} className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <item.icon size={20} />
            </div>
            <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            <Button variant="link" asChild className="mt-4 h-auto p-0 text-primary">
              <Link to={item.href}>{item.cta} <ArrowRight size={14} className="ml-1" /></Link>
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>

    {/* About Preview */}
    <SectionWrapper className="bg-gradient-section">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Meet <span className="text-gradient-gold">Ritesh</span></h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Ritesh Watts is an Indian-Canadian Author, Entrepreneur, Investor, and Speaker operating at the intersection of business growth, AI leverage, cross-border opportunity, and long-term wealth creation. Through his companies, content, and consulting work, he helps ambitious people think globally, move strategically, and build lasting leverage through business, systems, and visibility.
        </p>
        <Button variant="hero" size="lg" asChild className="mt-8">
          <Link to="/about">Read the Story <ArrowRight size={16} className="ml-1" /></Link>
        </Button>
      </div>
    </SectionWrapper>

    {/* Speaking Preview */}
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Book Ritesh to <span className="text-gradient-gold">Speak</span></h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Ritesh speaks on AI for business, founder mindset and decision-making, personal branding and business systems, and India–Canada cross-border opportunity. His sessions are practical, rooted in real execution, and designed to leave audiences with frameworks they can apply immediately.
        </p>
        <Button variant="hero" size="lg" asChild className="mt-8">
          <Link to="/speaking">View Speaking Topics <ArrowRight size={16} className="ml-1" /></Link>
        </Button>
      </div>
    </SectionWrapper>

    {/* Media Preview */}
    <SectionWrapper className="bg-gradient-section">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Real with <span className="text-gradient-gold">Ritesh</span></h2>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          Real with Ritesh is the media and podcast platform for conversations, clips, and stories that sit at the intersection of business, opportunity, growth, and modern founder life.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <Link to="/media">Watch / Listen</Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <Link to="/media/invite">Invite Ritesh to Your Podcast</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/media/apply">Apply as Guest</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>

    {/* Blog Preview */}
    <SectionWrapper>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Read the <span className="text-gradient-gold">Blog</span></h2>
        <p className="mt-2 text-sm text-secondary">Actionable perspectives on building smarter businesses, moving across borders, and growing long-term wealth.</p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Real founder lessons, practical frameworks, and ideas on AI, business systems, cross-border opportunity, and wealth-building — written by Ritesh and his team.
        </p>
        <Button variant="hero" size="lg" asChild className="mt-8">
          <Link to="/blog">Go to the Blog <ArrowRight size={16} className="ml-1" /></Link>
        </Button>
      </div>
    </SectionWrapper>

    {/* Newsletter */}
    <SectionWrapper id="newsletter" className="bg-gradient-section">
      <div className="mx-auto max-w-2xl">
        <NewsletterBlock />
      </div>
    </SectionWrapper>

    {/* Final Connection */}
    <SectionWrapper>
      <h2 className="text-center text-3xl font-bold md:text-4xl">Choose Your <span className="text-gradient-gold">Next Step</span></h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {finalCards.map((card) => (
          <div key={card.title} className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:glow-primary">
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{card.text}</p>
            <Button variant="hero" size="sm" asChild className="mt-5">
              <Link to={card.href}>{card.cta}</Link>
            </Button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  </Layout>
);

export default Index;
