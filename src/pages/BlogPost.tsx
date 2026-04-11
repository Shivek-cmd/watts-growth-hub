import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Section from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import blogAi from "@/assets/blog-ai.jpg";
import blogMigration from "@/assets/blog-migration.jpg";
import blogWealth from "@/assets/blog-wealth.jpg";

const allPosts = [
  {
    slug: "why-ai-is-the-founders-best-leverage-tool",
    title: "Why AI Is the Founder's Best Leverage Tool",
    pillar: "Build",
    date: "April 5, 2026",
    readTime: "7 min read",
    image: blogAi,
    excerpt: "Practical ways founders can use AI to move faster, decide better, and build smarter systems.",
    toc: ["The Leverage Mindset", "AI as a Decision Engine", "Automating the Mundane", "Building AI-First Systems", "The Founder's AI Stack", "What Comes Next"],
    content: [
      { heading: "The Leverage Mindset", body: "The best founders don't work harder — they find leverage. And in 2026, the single greatest leverage tool available to any founder is artificial intelligence. Not the buzzword version. The practical, day-to-day version that helps you make better decisions, move faster, and build systems that compound.\n\nLeverage isn't about doing less. It's about doing the right things with maximum force. AI gives founders the ability to operate at 10x capacity without 10x the team, the budget, or the time." },
      { heading: "AI as a Decision Engine", body: "Most founders struggle not because they lack ideas, but because they make too many decisions with too little data. AI changes this equation entirely.\n\nFrom customer sentiment analysis to market trend forecasting, AI tools can synthesize thousands of data points into actionable insights in seconds. The founder who uses AI as a decision engine doesn't guess — they decide with clarity." },
      { heading: "Automating the Mundane", body: "Every founder has a list of tasks that need to happen but don't need their brain. Email responses, scheduling, data entry, report generation, social media posting — these are all automatable.\n\nThe key insight: every hour you spend on automatable work is an hour stolen from strategy, relationships, and creative problem-solving. AI gives that time back." },
      { heading: "Building AI-First Systems", body: "The real power of AI isn't in individual tools — it's in building systems where AI is embedded from the start. Customer onboarding flows that adapt. Marketing campaigns that optimize themselves. Financial models that update in real-time.\n\nThis is what separates founders who use AI from founders who are built on AI. The latter compounds. The former plateaus." },
      { heading: "The Founder's AI Stack", body: "Every modern founder needs a core AI stack: a writing assistant for content and communication, an analytics tool for decision support, an automation platform for workflows, and a strategy tool for scenario planning.\n\nThe specific tools matter less than the system. Build the system first, then plug in the best tools available." },
      { heading: "What Comes Next", body: "AI is not a trend — it's infrastructure. The founders who treat it as a novelty will be outpaced by those who treat it as the foundation of their operating system.\n\nStart small. Automate one workflow. Use AI to improve one decision per day. Build from there. The compound effect is real, and it starts now." },
    ],
  },
  {
    slug: "reverse-migration-when-going-back-becomes-going-forward",
    title: "Reverse Migration: When Going Back Becomes Going Forward",
    pillar: "Move",
    date: "March 28, 2026",
    readTime: "6 min read",
    image: blogMigration,
    excerpt: "Strategic thinking about when and how to move back — and how to make it work.",
    toc: ["The Reverse Migration Wave", "Strategic vs Emotional Returns", "Building a Bridge", "The India Advantage", "Making the Decision"],
    content: [
      { heading: "The Reverse Migration Wave", body: "A growing number of professionals who moved abroad are now considering a strategic return. Not because they failed — but because the opportunity landscape has shifted.\n\nIndia's startup ecosystem, real estate market, and professional infrastructure have matured dramatically. For many, the question isn't 'should I go back?' but 'what's my strategic advantage if I do?'" },
      { heading: "Strategic vs Emotional Returns", body: "The most important distinction in reverse migration is between emotional and strategic returns. An emotional return is driven by homesickness, family pressure, or frustration. A strategic return is driven by opportunity analysis, market timing, and long-term positioning.\n\nBoth are valid. But only one is sustainable." },
      { heading: "Building a Bridge", body: "The smartest approach isn't a binary choice between staying or returning — it's building a bridge. Maintain assets, relationships, and business interests in both markets. Create optionality rather than burning bridges.\n\nThis dual-market positioning is increasingly valuable as global business becomes more interconnected." },
      { heading: "The India Advantage", body: "For returning professionals, India offers several structural advantages: lower operating costs, a massive talent pool, growing domestic consumption, and an increasingly sophisticated business infrastructure.\n\nThe key is leveraging your international experience as a competitive advantage in the Indian market, not trying to replicate your abroad life in India." },
      { heading: "Making the Decision", body: "The decision framework is simple: Where can you create the most value over the next 10 years? Where do your skills, network, and vision align with market opportunity?\n\nReverse migration isn't retreat — it's redeployment. And for the right founder, it might be the most strategic move they'll ever make." },
    ],
  },
  {
    slug: "building-wealth-through-business-not-just-savings",
    title: "Building Wealth Through Business, Not Just Savings",
    pillar: "Grow",
    date: "March 15, 2026",
    readTime: "8 min read",
    image: blogWealth,
    excerpt: "Why business ownership remains the most powerful wealth-building vehicle for ambitious people.",
    toc: ["The Savings Trap", "Business as a Wealth Vehicle", "The Three Pillars of Wealth", "Real Estate as an Accelerator", "The Long Game"],
    content: [
      { heading: "The Savings Trap", body: "Most people are taught to save their way to wealth. Cut expenses, maximize your 401k, live below your means. This advice isn't wrong — but it's incomplete.\n\nSavings alone, even with compound interest, rarely create transformative wealth. They create security. And security is important. But for those who want optionality, freedom, and generational impact, savings is just the foundation — not the building." },
      { heading: "Business as a Wealth Vehicle", body: "Business ownership is the single most powerful wealth-building vehicle available. It offers unlimited upside, tax advantages, skill development, network expansion, and the ability to create value for others while building your own.\n\nThe key insight: when you own a business, you're not trading time for money. You're building an asset that can grow, scale, and eventually run without your daily involvement." },
      { heading: "The Three Pillars of Wealth", body: "Sustainable wealth is built on three pillars: business income (active and eventually passive), real estate (cash flow and appreciation), and investments (stocks, funds, and alternative assets).\n\nThe order matters. Business first, because it generates the capital and cash flow needed to fund the other two pillars." },
      { heading: "Real Estate as an Accelerator", body: "Real estate is not the foundation of wealth — it's the accelerator. Once your business generates consistent cash flow, real estate allows you to deploy that capital into assets that appreciate, generate passive income, and provide tax benefits.\n\nThe combination of business income and real estate ownership creates a wealth flywheel that accelerates over time." },
      { heading: "The Long Game", body: "Wealth-building is a 10-20 year game. The decisions you make today about business, investments, and skills compound over decades.\n\nThe most important thing isn't the specific vehicle — it's the discipline to stay in the game, reinvest consistently, and think in decades rather than quarters.\n\nStart with business. Add real estate. Diversify into investments. And let time do the heavy lifting." },
    ],
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = allPosts.find((p) => p.slug === slug);
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <Layout>
        <Section>
          <div className="text-center py-20">
            <h1 className="font-display text-h2 font-bold">Post Not Found</h1>
            <Button variant="hero" size="lg" asChild className="mt-8">
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ paddingTop: "calc(var(--section-py) + 2rem)", paddingBottom: "var(--section-py)" }}>
        <div className="parallax-bg">
          <img src={post.image} alt="" width={1920} height={1080} className="opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))] via-[hsl(var(--background)/0.7)] to-[hsl(var(--background)/0.4)]" />
        <div className="container relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 reveal link-underline">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold reveal delay-1">{post.pillar}</p>
          <h1 className="mt-4 font-display text-h1 font-bold tracking-tight max-w-4xl reveal delay-2">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-6 text-sm text-muted-foreground reveal delay-3">
            <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content with TOC */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-[240px_1fr]">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">Table of Contents</p>
              <nav className="space-y-3">
                {post.toc.map((item, i) => (
                  <a
                    key={item}
                    href={`#section-${i}`}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article body */}
          <article className="max-w-3xl">
            {/* Featured image */}
            <div className="rounded-2xl overflow-hidden mb-12 reveal">
              <img src={post.image} alt={post.title} width={1200} height={600} className="w-full aspect-[2/1] object-cover" />
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12 reveal delay-1">
              {post.excerpt}
            </p>

            {post.content.map((section, i) => (
              <div key={section.heading} id={`section-${i}`} className={`mb-12 reveal delay-${Math.min(i + 1, 3)}`}>
                <h2 className="font-display text-h2 font-semibold tracking-tight mb-6">{section.heading}</h2>
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-4" style={{ maxWidth: "72ch" }}>
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </article>
        </div>
      </Section>

      {/* Related Posts */}
      <Section className="bg-[hsl(var(--surface-secondary))]">
        <div className="text-center max-w-3xl mx-auto reveal">
          <p className="section-label">Keep Reading</p>
          <h2 className="mt-4 font-display text-h2 font-semibold tracking-tight">Related Articles</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {relatedPosts.map((rp, i) => (
            <Link key={rp.slug} to={`/blog/${rp.slug}`} className={`group card-glow rounded-2xl p-0 overflow-hidden reveal delay-${i + 1}`}>
              <div className="aspect-[16/9] overflow-hidden">
                <img src={rp.image} alt={rp.title} loading="lazy" width={640} height={360} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">{rp.pillar}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-tight group-hover:text-gold transition-colors duration-300">{rp.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{rp.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                  Read More <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default BlogPost;
